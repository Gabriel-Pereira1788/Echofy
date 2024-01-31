import {TextStyle} from 'react-native/types';

import {$fontSize, $fontWeight} from '../textConstants';
import {TextProps} from '../textTypes';

export function makePresetFont(preset: TextProps['preset']): TextStyle | null {
  switch (preset) {
    case 'medium/14':
      return {
        fontSize: $fontSize.small14,
        fontWeight: $fontWeight.medium,
      };
    case 'medium/16':
      return {
        fontSize: $fontSize.medium16,
        fontWeight: $fontWeight.medium,
      };
    case 'semiBold/16':
      return {
        fontSize: $fontSize.medium16,
        fontWeight: $fontWeight.semiBold,
      };
    case 'regular/14':
      return {
        fontSize: $fontSize.small14,
        fontWeight: $fontWeight.regular,
      };

    case 'semiBold/14':
      return {
        fontSize: $fontSize.small14,
        fontWeight: $fontWeight.semiBold,
      };
    default:
      return null;
  }
}
