import {useEffect} from 'react';
import {Appearance} from 'react-native';

import {useSettingsService} from '@services';

export function useAppColorScheme() {
  const {onSystemChange} = useSettingsService();

  useEffect(() => {
    onSystemChange(Appearance.getColorScheme());
  }, [onSystemChange]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(preferences => {
      onSystemChange(preferences.colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, [onSystemChange]);
}
