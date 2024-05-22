export type TrackState = 'ready' | 'none' | 'playing';

export interface Track {
  bookId: string;
  url: string;
  title: string;
  artist: string;
  artwork: string;
  chapterNumber: number;
}
export interface TrackMetadata {
  currentIndex?: number;
  lastIndex?: number;
  lastPosition?: number;
  track?: Partial<Track>;
  lastTrack?: Partial<Track>;
}

export type TrackEvent<T> = (event: T) => Promise<void> | void;

export interface TrackListeners {
  playbackState: TrackEvent<TrackState>;
  trackChanged: TrackEvent<Track>;
  playbackError: TrackEvent<string>;
}

export interface AudioTrackerImpl {
  setEventListener<Key extends keyof TrackListeners>(
    keyEvent: Key,
    event: TrackListeners[Key],
  ): void;

  getActiveTrack: () => Promise<Track | null> | (Track | null);
  getTracks: () => Track[];
  reset: () => void;
  setupPlayer: () => void;
  retry: () => void;
  play: () => void;
  pause: () => void;
  getVolume: () => void;
  seekTo: (position: number) => void;
  addTracks: (tracks: Track[]) => void;
  setVolume: (value: number) => void;
  skipTo: (index: number) => void;
  skipToNext: () => void;
  skipToPrevious: () => void;
  setRate: (rate: number) => void;
  getProgress: () => void;
}
