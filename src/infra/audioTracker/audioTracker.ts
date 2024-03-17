import TrackPlayer, {Event, useProgress} from 'react-native-track-player';

export {useProgress};

import {Track, TrackListeners, TrackState} from './types';

const mappedEventsListener: Record<
  keyof TrackListeners,
  (listener: (value: any) => void) => void
> = {
  playbackError: (listener: TrackListeners['playbackError']) =>
    TrackPlayer.addEventListener(Event.PlaybackError, err => {
      listener(err.message);
    }),
  playbackState: (listener: TrackListeners['playbackState']) =>
    TrackPlayer.addEventListener(Event.PlaybackState, _type => {
      listener(_type.state as TrackState);
    }),
  trackChanged: (listener: TrackListeners['trackChanged']) =>
    TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, event => {
      if (event.track) {
        listener({
          artist: event.track.artist!,
          artwork: event.track.artwork!,
          chapterNumber: event.index!,
          title: event.track?.title!,
          url: event.track?.url,
        });
      }
    }),
};

let allTracks: Track[] = [];
function getTracks() {
  return allTracks;
}

async function getActiveTrack(): Promise<Track | null> {
  const chapterNumber = await TrackPlayer.getActiveTrackIndex();
  const result = await TrackPlayer.getActiveTrack();
  if (result && chapterNumber) {
    return {
      artist: result?.artist!,
      artwork: result.artwork!,
      title: result.title!,
      url: result.url!,
      chapterNumber,
    };
  }

  return null;
}

function setEventListener<Key extends keyof TrackListeners>(
  keyEvent: Key,
  event: TrackListeners[Key],
) {
  mappedEventsListener[keyEvent](event);
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
  allTracks = tracks;
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

async function getProgress() {
  return await TrackPlayer.getProgress();
}

export const audioTracker = {
  reset,
  getProgress,
  getTracks,
  getActiveTrack,
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
  setEventListener,
  setRate,
  retry,
};
