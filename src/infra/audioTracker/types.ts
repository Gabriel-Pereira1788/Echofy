export type TrackState = 'ready' | 'none' | 'playing';

export interface Track {
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
