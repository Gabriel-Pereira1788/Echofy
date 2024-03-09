import {create} from 'zustand';

import {PlayerStore} from '../playerTypes';

export const usePlayerZustandStore = create<PlayerStore>(set => ({
  player: null,
  show: _player => {
    set({player: _player});
  },
  changeStatus: _status => {
    set(state => {
      if (state.player) {
        const newPlayerState = {...state.player, currentStatus: _status};
        return {player: newPlayerState};
      }

      return state;
    });
  },
  hide: () => {
    set({player: null});
  },
}));
