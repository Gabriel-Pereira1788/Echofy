import {TickSquare} from '@assets';
import {Theme, theme} from '@styles';
import React from 'react';

type IconMappedKey = 'tickSquare';
export interface IconProps {
  iconName: IconMappedKey;
  color: keyof Theme['colors'];
  size: keyof Theme['spacing'];
}

export interface IconBase {
  size: string;
  color: string;
}

export function Icon({
  iconName,
  size = 'sp10',
  color = 'black',
}: IconProps & IconBase) {
  const IconRender = iconMapped[iconName];
  const _color = theme.colors[color];
  const _size = theme.spacing[size].toString();
  return <IconRender size={_size} color={_color} />;
}

const iconMapped: Record<IconMappedKey, React.ComponentType<IconBase>> = {
  tickSquare: TickSquare,
};
