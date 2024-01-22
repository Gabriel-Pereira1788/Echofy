import React from 'react';

import {CloseSquare, TickSquare} from '@assets';
import {Theme, theme} from '@styles';

type IconMappedKey = 'tickSquare' | 'closeSquare';
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

export function Icon({
  iconName,
  size = 'sp10',
  color = 'black',
  type,
  testID,
}: IconProps & IconBase) {
  const IconRender = iconMapped[iconName];
  const _color = theme.colors[color];
  const _size = theme.spacing[size].toString();
  return <IconRender testID={testID} size={_size} color={_color} type={type} />;
}

const iconMapped: Record<IconMappedKey, React.ComponentType<IconBase>> = {
  tickSquare: TickSquare,
  closeSquare: CloseSquare,
};
