import {create} from 'zustand';

interface PlayerState {
  title: string;
  author: string;
  coverURI: string;
}

interface PlayerStore {
  player: PlayerState | null;
  show: (_player: PlayerState) => void;
  hide: () => void;
}

export const usePlayerZustandStore = create<PlayerStore>(set => ({
  player: null,
  show: _player => {
    set({player: _player});
  },
  hide: () => {
    set({player: null});
  },
}));
