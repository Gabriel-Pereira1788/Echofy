import {usePlayerZustandStore} from './zustand/usePlayerZustandStore';

export function usePlayerStore() {
  const player = usePlayerZustandStore(state => state.player);
  return player;
}

export function usePlayerActions() {
  const play = usePlayerZustandStore(state => state.play);
  const stop = usePlayerZustandStore(state => state.stop);

  return {
    play,
    stop,
  };
}
