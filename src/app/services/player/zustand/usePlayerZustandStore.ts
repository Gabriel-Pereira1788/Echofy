import {StorageKeys, storage} from '@infra';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {PlayerStore} from '../types';

export const usePlayerZustandStore = create<PlayerStore>()(
  persist(
    set => ({
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
    }),
    {
      name: StorageKeys.MinimizePlayer,
      storage: storage,
    },
  ),
);
