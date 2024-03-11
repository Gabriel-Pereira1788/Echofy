import {useCallback, useEffect, useState} from 'react';

import {secondsToMinutesFormatter} from '@utils';
import TrackPlayer, {Event, useProgress} from 'react-native-track-player';

import {Track, TrackMetadata, TrackState} from './types';

export function useTrackPlayerProgress() {
  const progress = useProgress();

  const percentageProgress =
    progress.duration > 0 ? (progress.position / progress.duration) * 100 : 0;

  const minutesDuration = secondsToMinutesFormatter(progress.duration);
  const minutesPosition = secondsToMinutesFormatter(progress.position);
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
    TrackPlayer.addEventListener(Event.PlaybackState, data => {
      setTrackState(data.state as TrackState);
    });
    TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, state => {
      console.log('state track changed', state);
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
  }, []);

  const initialize = useCallback(async (tracks: Track[]) => {
    await TrackPlayer.reset();
    await TrackPlayer.add(tracks);
    memoizedTracks = tracks;
  }, []);

  async function play() {
    await TrackPlayer.play();
  }

  // TrackPlayer.

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

  async function setRate(rate: number) {
    await TrackPlayer.setRate(rate);
  }
  return {
    metadata,
    trackState,
    tracks: memoizedTracks,
    play,
    pause,
    setRate,
    getVolume,
    initialize,
    seekTo,
    skipToNext,
    skipToPrevious,
    volumeControl,
  };
}
