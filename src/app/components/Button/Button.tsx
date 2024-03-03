import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Icon} from '../Icon/Icon';
import {IconMappedKey} from '../Icon/iconTypes';
import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

import {buildColor, buildWrapperStyle} from './functions';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  iconName?: IconMappedKey;

  type?: 'outline' | 'filled' | 'category' | 'selected';
}

export function Button({
  text,
  type = 'filled',
  iconName,
  ...rest
}: ButtonProps) {
  const $wrapperStyle = buildWrapperStyle(type, rest.disabled);
  const $color = buildColor(type);
  return (
    <TouchableOpacityBox boxProps={$wrapperStyle} {...rest}>
      {iconName && <Icon size="sp20" iconName={iconName} color={$color} />}
      <Text text={text} preset="medium/16" color={$color} />
    </TouchableOpacityBox>
  );
}
