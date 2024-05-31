import {StorageKeys, storage} from '@infra';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export interface SettingsStore {
  showOnBoarding: boolean;
  finishOnboarding: () => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    set => ({
      showOnBoarding: true,
      finishOnboarding: () => {
        set(prev => ({...prev, showOnBoarding: false}));
      },
    }),
    {
      name: StorageKeys.SettingsPersistence + '1234',
      storage: storage,
    },
  ),
);
