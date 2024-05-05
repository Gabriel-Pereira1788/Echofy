import {create} from 'zustand';
export interface ToastState {
  message: string;
  title: string;
  type: 'error' | 'success' | 'alert';
}

interface ToastStore {
  toast: ToastState | null;
  show: (toast: ToastState) => void;
  hide: () => void;
}

export const useToastZustandStore = create<ToastStore>(set => ({
  toast: null,
  show: _toast => set({toast: _toast}),
  hide: () => set({toast: null}),
}));
