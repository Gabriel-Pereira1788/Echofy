import {Theme} from '@styles';

export type IconMappedKey =
  | 'tickSquare'
  | 'closeSquare'
  | 'settings'
  | 'home'
  | 'search'
  | 'document'
  | 'arrowLeft'
  | 'arrowDown'
  | 'activity'
  | 'play'
  | 'pause'
  | 'volumeUp'
  | 'arrowLeftCircle'
  | 'arrowRightCircle'
  | 'bookmark'
  | 'paper'
  | 'timeSquare'
  | 'download'
  | 'volumeDown'
  | 'volumeOff'
  | 'star';
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
