import {useToastZustandStore} from './zustand/useToastZustandStore';

export function useToastStore() {
  const toast = useToastZustandStore(state => state.toast);

  return toast;
}

export function useToastActions() {
  const show = useToastZustandStore(state => state.show);
  const hide = useToastZustandStore(state => state.hide);

  return {
    show,
    hide,
  };
}
