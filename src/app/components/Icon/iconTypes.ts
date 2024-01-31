import {Theme} from '@styles';

export type IconMappedKey = 'tickSquare' | 'closeSquare' | 'settings';
export interface IconProps {
  iconName: IconMappedKey;
  color: keyof Theme['colors'];
  size: keyof Theme['spacing'];
}

export interface IconBase {
  size: string;
  color: string;
  type?: 'bold' | 'light';
  testID?: string;
}