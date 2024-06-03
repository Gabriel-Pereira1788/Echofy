import {useAppColor} from '@services';
import {useTheme as useThemeRE} from '@shopify/restyle';
import {Theme} from '@styles';

export function useTheme() {
  const theme = useThemeRE<Theme>();
  const colorScheme = useAppColor();
  return {...theme, colorScheme};
}
