import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useTheme} from './useTheme';

export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();
  const {spacing} = useTheme();

  return {
    top: Math.max(top, spacing.sp23),
    bottom: Math.max(bottom, spacing.sp23),
  };
}
