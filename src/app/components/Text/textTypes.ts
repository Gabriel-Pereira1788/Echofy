import {ReactNode} from 'react';

import {Theme} from '@styles';

import {FontSize, FontWeight} from './textConstants';

export interface FontStyleProps {
  size?: FontSize;
  weight?: FontWeight;
}

type Preset =
  | 'medium/16'
  | 'semiBold/16'
  | 'regular/14'
  | 'semiBold/14'
  | undefined;

interface CommonTextProps<T> {
  text: string;
  color?: keyof Theme['colors'];
  setColorsTheme?: {
    dark: keyof Theme['colors'];
    light: keyof Theme['colors'];
  };
  preset?: T;
  children?: ReactNode;
}

export type TextProps<T = Preset> = T extends undefined
  ? FontStyleProps & CommonTextProps<T>
  : CommonTextProps<T>;
