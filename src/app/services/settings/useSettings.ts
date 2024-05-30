import {useSettingsStore} from './zustand/useSettingsStore';

export function useShowOnboarding() {
  const showOnboarding = useSettingsStore(store => store.showOnBoarding);

  return showOnboarding;
}

export function useSettingsService() {
  const finishOnboarding = useSettingsStore(store => store.finishOnboarding);

  return {
    finishOnboarding,
  };
}
