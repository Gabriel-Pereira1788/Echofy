import {ColorSchemeName} from 'react-native';

import {StorageKeys, storage} from '@infra';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {settingsService} from '../settingsService';

export type AppColorScheme = 'light' | 'dark';

export type ThemePreference = AppColorScheme | 'system';
export interface SettingsStore {
  showOnBoarding: boolean;
  appColor: AppColorScheme;
  themePreference: ThemePreference;
  finishOnboarding: () => void;
  setThemePreference: (themePreference: ThemePreference) => void;
  onSystemChange: (color: ColorSchemeName) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      showOnBoarding: true,
      themePreference: 'system',
      appColor: 'light',
      finishOnboarding: () => {
        set(prev => ({...prev, showOnBoarding: false}));
      },
      setThemePreference: _themePreference => {
        const appTheme =
          settingsService.onChangeThemePreference(_themePreference);

        set({
          appColor: appTheme,
          themePreference: _themePreference,
        });
      },
      onSystemChange: color => {
        const appTheme = settingsService.onSystemChange(
          color,
          get().themePreference,
        );

        if (appTheme) {
          set({
            appColor: appTheme,
          });
        }
      },
    }),
    {
      name: StorageKeys.SettingsPersistence,
      storage: storage,
    },
  ),
);
