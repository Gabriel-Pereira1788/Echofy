import {ThemePreference, useSettingsStore} from './zustand/useSettingsStore';

export function useAppColor() {
  const appTheme = useSettingsStore(store => store.appColor);

  return appTheme;
}

export function useThemePreference(): ThemePreference {
  const themePreference = useSettingsStore(store => store.themePreference);

  return themePreference;
}
