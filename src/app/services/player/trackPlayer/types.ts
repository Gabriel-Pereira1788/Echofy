export interface TrackMetadata {
  currentIndex?: number;
  lastIndex?: number;
  lastPosition?: number;
  track?: Partial<Track>;
  lastTrack?: Partial<Track>;
}

export type TrackState = 'ready' | 'none' | 'playing';

export interface Track {
  url: string;
  title: string;
  artist: string;
  artwork: string;
}
