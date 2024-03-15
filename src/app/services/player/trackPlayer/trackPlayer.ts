import TrackPlayer, {Event} from 'react-native-track-player';

import {Track, TrackListeners, TrackState} from './types';

function setListeners(listeners: TrackListeners) {
  TrackPlayer.addEventListener(Event.PlaybackState, event =>
    listeners.playbackState(event.state as TrackState),
  );
  TrackPlayer.addEventListener(Event.PlaybackError, err => {
    listeners.playbackError(err.message);
  });

  TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, event => {
    listeners.trackChanged({
      currentIndex: event.index,
      lastIndex: event.lastIndex,
      lastPosition: event.lastPosition,
      track: event.track,
      lastTrack: event.lastTrack,
    });
  });
}

async function reset() {
  await TrackPlayer.reset();
}

function setupPlayer() {
  TrackPlayer.setupPlayer();
}

async function retry() {
  await TrackPlayer.retry();
}
async function play() {
  await TrackPlayer.play();
}

async function pause() {
  await TrackPlayer.pause();
}

async function getVolume() {
  await TrackPlayer.getVolume();
}

async function seekTo(position: number) {
  await TrackPlayer.seekTo(position);
}
async function addTracks(tracks: Track[]) {
  await TrackPlayer.add(tracks);
}

async function setVolume(value: number) {
  await TrackPlayer.setVolume(value);
}

async function skipTo(index: number) {
  await TrackPlayer.skip(index);
}

async function skipToNext() {
  await TrackPlayer.skipToNext(0);
}

async function skipToPrevious() {
  await TrackPlayer.skipToPrevious(0);
}

async function setRate(rate: number) {
  await TrackPlayer.setRate(rate);
}
export const trackPlayer = {
  setListeners,
  reset,
  addTracks,
  setupPlayer,
  play,
  pause,
  getVolume,
  seekTo,
  setVolume,
  skipTo,
  skipToNext,
  skipToPrevious,
  setRate,
  retry,
};
