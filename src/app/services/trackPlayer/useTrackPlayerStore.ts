import {useTrackPlayerZustandStore} from './zustand/useTrackPlayerZustandStore';

export function useTrackPlayerStore() {
  const isOpened = useTrackPlayerZustandStore(state => state.isOpened);
  return {
    isOpened,
  };
}

export function useTrackPlayerStoreActions() {
  const openController = useTrackPlayerZustandStore(
    state => state.openController,
  );
  const closeController = useTrackPlayerZustandStore(
    state => state.closeController,
  );

  return {
    openController,
    closeController,
  };
}
