import React from 'react';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';

import {Theme} from '@styles';

import {Icon} from '../Icon/Icon';
import {IconMappedKey} from '../Icon/iconTypes';
import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

import {buildColor, buildWrapperStyle} from './functions';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  iconName?: IconMappedKey;
  customColor?: keyof Theme['colors'];
  loading?: boolean;
  type?: 'outline' | 'filled' | 'category' | 'selected' | 'flat';
}

export function Button({
  text,
  type = 'filled',
  iconName,
  customColor,
  loading,
  ...rest
}: ButtonProps) {
  const $wrapperStyle = buildWrapperStyle(type, rest.disabled, customColor);
  const $color = customColor ? customColor : buildColor(type);
  return (
    <TouchableOpacityBox boxProps={$wrapperStyle} {...rest}>
      {iconName && <Icon size="sp20" iconName={iconName} color={$color} />}
      {loading ? (
        <ActivityIndicator size={20} />
      ) : (
        <Text text={text} preset="medium/16" color={$color} />
      )}
    </TouchableOpacityBox>
  );
}
