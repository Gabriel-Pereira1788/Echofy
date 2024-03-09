import {useCallback} from 'react';

import {secondsToMinutesFormatter} from '@utils';
import TrackPlayer, {Event, useProgress} from 'react-native-track-player';

export interface Track {
  url: string;
  title: string;
  artist: string;
  artwork: string;
}

export function useTrackPlayerProgress() {
  const progress = useProgress();

  console.log('progress', progress.buffered);
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

export function useTrackPlayerController() {
  const initialize = useCallback(async (tracks: Track[]) => {
    TrackPlayer.addEventListener(Event.PlaybackState, state => {
      console.log('state', state);
    });
    TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, state => {
      console.log('state', state);
    });
    TrackPlayer.addEventListener(Event.MetadataCommonReceived, state => {
      console.log('state', state);
    });

    TrackPlayer.addEventListener(Event.PlaybackError, async err => {
      console.log('err', err);
      await TrackPlayer.retry();
    });

    await TrackPlayer.reset();
    await TrackPlayer.add(tracks);
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

  async function volumeControl(value: number) {
    await TrackPlayer.setVolume(value);
  }

  return {
    play,
    pause,
    initialize,
    seekTo,
    skipToNext,
    skipToPrevious,
    volumeControl,
  };
}
