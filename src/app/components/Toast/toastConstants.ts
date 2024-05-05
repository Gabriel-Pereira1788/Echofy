import {ToastState} from '@services';
import {Theme} from '@styles';

export const SECONDS_FOR_HIDE_TOAST = 3000;

export const mappedColorTypeToast: Record<
  ToastState['type'],
  keyof Theme['colors']
> = {
  alert: 'alertColor',
  error: 'error',
  success: 'success',
};
