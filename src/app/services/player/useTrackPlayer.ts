import {useCallback, useEffect, useState} from 'react';

import {StorageKeys, storage} from '@infra';
import {secondsToMinutesFormatter} from '@utils';

import {useProgress, trackPlayer} from './trackPlayer';
import {TrackDataPersistence} from './trackPlayer/types';

import {Track, TrackMetadata, TrackState} from '.';

export function useTrackPlayerProgress() {
  const progress = useProgress();

  const percentageProgress =
    progress.duration > 0 ? (progress.position / progress.duration) * 100 : 0;

  const minutesDuration = secondsToMinutesFormatter(progress.duration);
  const minutesPosition = secondsToMinutesFormatter(progress.position);

  useEffect(() => {
    if (progress.position) {
      storage.setItem(StorageKeys.TrackProgressPersistence, progress.position);
    }
  }, [progress.position]);

  return {
    position: progress.position,
    duration: progress.duration,
    minutesDuration,
    minutesPosition,
    percentageProgress: percentageProgress,
  };
}

trackPlayer.setupPlayer();
let memoizedTracks: Track[] = [];

export function useTrackPlayerController() {
  const [metadata, setMetadata] = useState<TrackMetadata | null>(null);
  const [trackState, setTrackState] = useState<TrackState>('none');

  useEffect(() => {
    persistTrackData();
    trackPlayer.setListeners({
      playbackError: async err => {
        console.log('err', err);
        await trackPlayer.retry();
      },
      playbackState: _trackState => {
        setTrackState(_trackState);
      },
      trackChanged: _metadata => {
        console.log('state track changed', _metadata);
        if (_metadata) {
          storage.setItem(StorageKeys.TrackPersistence, {
            currentIndex: _metadata.currentIndex,
            tracks: memoizedTracks,
          });
        }
        setMetadata(_metadata);
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function persistTrackData() {
    const trackData = await storage.getItem<TrackDataPersistence>(
      StorageKeys.TrackPersistence,
    );
    const persistedPosition = await storage.getItem<number>(
      StorageKeys.TrackProgressPersistence,
    );

    if (
      trackData &&
      trackData.tracks.length > 0 &&
      memoizedTracks.length === 0
    ) {
      console.log('tracks', trackData);
      await initialize(trackData.tracks);
      await trackPlayer.skipTo(trackData.currentIndex);
      await trackPlayer.seekTo(persistedPosition);
      await trackPlayer.pause();
    }
  }

  const initialize = useCallback(async (tracks: Track[]) => {
    await trackPlayer.reset();
    await trackPlayer.addTracks(tracks);
    memoizedTracks = tracks;
  }, []);

  return {
    metadata,
    trackState,
    tracks: memoizedTracks,
    initialize,
    play: trackPlayer.play,
    pause: trackPlayer.pause,
    skipTo: trackPlayer.skipTo,
    seekTo: trackPlayer.seekTo,
    setRate: trackPlayer.setRate,
    getVolume: trackPlayer.getVolume,
    skipToNext: trackPlayer.skipToNext,
    volumeControl: trackPlayer.setVolume,
    skipToPrevious: trackPlayer.skipToPrevious,
  };
}
