import React from 'react';

import {CloseSquare, Settings, TickSquare} from '@assets';

import {useTheme} from '@hooks';

import {IconBase, IconMappedKey, IconProps} from './iconTypes';

export function Icon({
  iconName,
  size = 'sp10',
  color = 'black',
  type,
  testID,
}: IconProps & IconBase) {
  const theme = useTheme();

  const IconRender = iconMapped[iconName];

  const _color = theme.colors[color];
  const _size = theme.spacing[size].toString();

  return <IconRender testID={testID} size={_size} color={_color} type={type} />;
}

const iconMapped: Record<IconMappedKey, React.ComponentType<IconBase>> = {
  tickSquare: TickSquare,
  closeSquare: CloseSquare,
  settings: Settings,
};
