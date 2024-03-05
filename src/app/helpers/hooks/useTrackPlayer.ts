import {useEffect} from 'react';

import TrackPlayer, {useProgress} from 'react-native-track-player';

interface Track {
  url: string;
  title: string;
  artist: string;
  artwork: string;
}

interface TrackPlayerProps {
  tracks: Track[];
}

export function useTrackPlayer({tracks}: TrackPlayerProps) {
  const progress = useProgress();

  useEffect(() => {
    TrackPlayer.add(tracks);
  }, [tracks]);
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
    position: progress.position,
    duration: progress.duration,
    play,
    pause,
    seekTo,
    skipToNext,
    skipToPrevious,
  };
}
