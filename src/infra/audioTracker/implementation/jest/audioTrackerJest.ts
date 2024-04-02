import {AudioTrackerImpl, Track, TrackListeners} from '../..';

let tracks: Track[] = [];
let currentTrack: Track | null = null;
let currentVolume = 1;
export let currentTrackIndex = 0;
const trackChangedListeners: Function[] = [];
export const mappedEventsListener: Record<
  keyof TrackListeners,
  (listener: (value: any) => void) => void
> = {
  playbackError: (listener: TrackListeners['playbackError']) => {
    console.log(listener);
  },
  playbackState: (listener: TrackListeners['playbackState']) => {
    console.log(listener);
  },
  trackChanged: (listener: TrackListeners['trackChanged']) => {
    const event = (track: Track, index: number) => {
      if (track) {
        listener({
          artist: track.artist!,
          artwork: track.artwork!,
          chapterNumber: index!,
          title: track?.title!,
          url: track?.url,
        });
      }
    };

    trackChangedListeners.push(event);
  },
};

function runNotifyTrackListeners(event: {track: Track; index: number}) {
  for (let listener of trackChangedListeners) {
    listener(event.track, event.index);
  }
}

export const audioTrackerJest: AudioTrackerImpl = {
  addTracks: jest.fn((_tracks: Track[]) => {
    tracks = _tracks;
    currentTrack = _tracks[0];
  }),
  skipToNext: jest.fn(() => {
    const index = tracks.findIndex(
      _track => _track.chapterNumber === currentTrack?.chapterNumber,
    );

    const newIndex = index + 1;
    const newTrack = tracks[newIndex];
    currentTrack = newTrack;
    currentTrackIndex = newIndex;
    runNotifyTrackListeners({track: newTrack, index: newIndex});
  }),
  skipToPrevious: jest.fn(() => {
    const index = tracks.findIndex(
      _track => _track.chapterNumber === currentTrack?.chapterNumber,
    );

    const newIndex = index - 1;
    const newTrack = tracks[newIndex];
    currentTrack = newTrack;
    currentTrackIndex = newIndex;

    runNotifyTrackListeners({track: newTrack, index: newIndex});
  }),
  skipTo: jest.fn((index: number) => {
    const newTrack = tracks.find((_, _index) => _index === index);

    if (newTrack) {
      currentTrack = newTrack;
    }
  }),
  getVolume: jest.fn(() => currentVolume),
  getActiveTrack: jest.fn(() => currentTrack),
  getProgress: jest.fn(() => 10),
  getTracks: jest.fn(() => tracks),
  pause: jest.fn(),
  play: jest.fn(),
  reset: jest.fn(() => {
    tracks = [];
  }),
  retry: jest.fn(),
  seekTo: jest.fn(),
  setEventListener: jest.fn((key, event) => {
    mappedEventsListener[key](event);
  }),
  setRate: jest.fn(),
  setupPlayer: jest.fn(),
  setVolume: jest.fn(),
};
