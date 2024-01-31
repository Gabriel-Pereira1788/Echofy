import {Theme} from '@styles';

import {ButtonProps} from '../Button';

export const buildColorText = (
  type: ButtonProps['type'],
): keyof Theme['colors'] => {
  if (type === 'outline' || type === 'category') {
    return 'buttonText';
  }
  return 'white';
};
