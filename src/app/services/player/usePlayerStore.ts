import {usePlayerZustandStore} from './zustand/usePlayerZustandStore';

export function usePlayerStore() {
  const player = usePlayerZustandStore(state => state.player);
  return player;
}

export function usePlayerActions() {
  const show = usePlayerZustandStore(state => state.show);
  const hide = usePlayerZustandStore(state => state.hide);

  return {
    show,
    hide,
  };
}
