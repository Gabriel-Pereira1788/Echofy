import {useCallback, useEffect, useState} from 'react';

import {StorageKeys, storage} from '@infra';
import {secondsToMinutesFormatter} from '@utils';
import TrackPlayer, {Event, useProgress} from 'react-native-track-player';

import {Track, TrackDataPersistence, TrackMetadata, TrackState} from './types';

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

  useEffect(() => {
    persistTrackProgress();
  }, []);

  async function persistTrackProgress() {
    const persistedPosition = await storage.getItem<number>(
      StorageKeys.TrackProgressPersistence,
    );

    console.log('progress returned', persistedPosition);
  }
  return {
    position: progress.position,
    duration: progress.duration,
    minutesDuration,
    minutesPosition,
    percentageProgress: percentageProgress,
  };
}

TrackPlayer.setupPlayer();
let memoizedTracks: Track[] = [];

export function useTrackPlayerController() {
  const [metadata, setMetadata] = useState<TrackMetadata | null>(null);
  const [trackState, setTrackState] = useState<TrackState>('none');

  useEffect(() => {
    persistTrackData();
    setListeners();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function persistTrackData() {
    const trackData = await storage.getItem<TrackDataPersistence>(
      StorageKeys.TrackPersistence,
    );

    if (trackData && memoizedTracks.length === 0) {
      console.log('trackDataPersisted', trackData.tracks);
      initialize(trackData.tracks);
    }
  }

  function setListeners() {
    TrackPlayer.addEventListener(Event.PlaybackState, data => {
      setTrackState(data.state as TrackState);
    });
    TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, state => {
      console.log('state track changed', state);
      if (state) {
        const trackDataPersistence: TrackDataPersistence = {
          currentIndex: state.index!,
          tracks: memoizedTracks,
        };
        storage.setItem(StorageKeys.TrackPersistence, trackDataPersistence);
      }
      setMetadata({
        currentIndex: state.index,
        lastIndex: state.lastIndex,
        lastPosition: state.lastPosition,
        track: state.track,
        lastTrack: state.lastTrack,
      });
    });
    TrackPlayer.addEventListener(Event.MetadataCommonReceived, state => {
      console.log('state metadata', state);
    });

    TrackPlayer.addEventListener(Event.PlaybackError, async err => {
      console.log('err', err);
      await TrackPlayer.retry();
    });
  }

  const initialize = useCallback(async (tracks: Track[]) => {
    await TrackPlayer.reset();
    await TrackPlayer.add(tracks);
    memoizedTracks = tracks;
  }, []);

  async function play() {
    await TrackPlayer.play();
  }

  async function pause() {
    await TrackPlayer.pause();
  }

  async function skipToNext() {
    await TrackPlayer.skipToNext(0);
  }

  async function skipToPrevious() {
    await TrackPlayer.skipToPrevious(0);
  }

  async function seekTo(position: number) {
    await TrackPlayer.seekTo(position);
  }
  async function getVolume() {
    return await TrackPlayer.getVolume();
  }

  async function volumeControl(value: number) {
    await TrackPlayer.setVolume(value);
  }

  async function skipTo(index: number) {
    await TrackPlayer.skip(index);
  }
  async function setRate(rate: number) {
    await TrackPlayer.setRate(rate);
  }
  return {
    metadata,
    trackState,
    tracks: memoizedTracks,
    play,
    pause,
    skipTo,
    setRate,
    getVolume,
    initialize,
    seekTo,
    skipToNext,
    skipToPrevious,
    volumeControl,
  };
}
