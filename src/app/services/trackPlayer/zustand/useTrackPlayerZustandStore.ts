import {create} from 'zustand';

interface State {
  isOpened: boolean;
  openController: () => void;
  closeController: () => void;
}

export const useTrackPlayerZustandStore = create<State>(set => ({
  isOpened: false,
  openController: () => {
    set({isOpened: true});
  },
  closeController: () => {
    set({isOpened: false});
  },
}));
