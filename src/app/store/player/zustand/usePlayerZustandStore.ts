import {create} from 'zustand';

interface PlayerState {
  title: string;
  author: string;
  coverURI: string;
}

interface PlayerStore {
  player: PlayerState | null;
  play: (_player: PlayerState) => void;
  stop: () => void;
}

export const usePlayerZustandStore = create<PlayerStore>(set => ({
  player: null,
  play: _player => {
    set({player: _player});
  },
  stop: () => {
    set({player: null});
  },
}));
