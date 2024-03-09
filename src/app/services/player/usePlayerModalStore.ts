import {usePlayerModalZustandStore} from './zustand/usePlayerModalZustandStore';

export function usePlayerModalStore() {
  const isOpened = usePlayerModalZustandStore(state => state.isOpened);
  return {
    isOpened,
  };
}

export function usePlayerModalStoreActions() {
  const openController = usePlayerModalZustandStore(
    state => state.openController,
  );
  const closeController = usePlayerModalZustandStore(
    state => state.closeController,
  );

  return {
    openController,
    closeController,
  };
}
