import {useCallback} from 'react';

import TrackPlayer, {Event, useProgress} from 'react-native-track-player';

export interface Track {
  url: string;
  title: string;
  artist: string;
  artwork: string;
}

export function useTrackPlayerState() {
  const progress = useProgress();

  return {
    position: progress.position,
    duration: progress.duration,
  };
}

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

    TrackPlayer.addEventListener(Event.PlaybackError, err => {
      console.log('err', err);
    });
    await TrackPlayer.setupPlayer();

    await TrackPlayer.add(tracks);
  }, []);

  async function play() {
    await TrackPlayer.play();
  }

  async function pause() {
    await TrackPlayer.pause();
  }

  async function skipToNext() {
    await TrackPlayer.skipToNext();
  }

  async function skipToPrevious() {
    await TrackPlayer.skipToPrevious();
  }

  async function seekTo(position: number) {
    await TrackPlayer.seekTo(position);
  }

  return {
    play,
    pause,
    initialize,
    seekTo,
    skipToNext,
    skipToPrevious,
  };
}
