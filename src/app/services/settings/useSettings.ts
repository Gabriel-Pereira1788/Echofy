import {useSettingsStore} from './zustand/useSettingsStore';

export function useShowOnboarding() {
  const showOnboarding = useSettingsStore(store => store.showOnBoarding);

  return showOnboarding;
}

export function useSettingsService() {
  const finishOnboarding = useSettingsStore(store => store.finishOnboarding);
  const onSystemChange = useSettingsStore(store => store.onSystemChange);
  const setThemePreference = useSettingsStore(
    store => store.setThemePreference,
  );
  return {
    setThemePreference,
    onSystemChange,
    finishOnboarding,
  };
}
