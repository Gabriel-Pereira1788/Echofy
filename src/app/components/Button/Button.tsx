import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

import {buildColorText, buildWrapperStyle} from './functions';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  type?: 'outline' | 'filled' | 'category' | 'selected';
}

export function Button({text, type = 'filled', ...rest}: ButtonProps) {
  const $wrapperStyle = buildWrapperStyle(type, rest.disabled);
  const $colorText = buildColorText(type);
  return (
    <TouchableOpacityBox boxProps={$wrapperStyle} {...rest}>
      <Text text={text} preset="medium/16" color={$colorText} />
    </TouchableOpacityBox>
  );
}
