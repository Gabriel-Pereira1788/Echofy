import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Theme} from '@styles';

import {BoxProps} from '../Box/Box';
import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  type?: 'outline' | 'filled' | 'category' | 'selected';
}

export function Button({text, type = 'filled', ...rest}: ButtonProps) {
  const $wrapperStyle = buildWrapperStyle(type);
  const $colorText = buildColorText(type);
  return (
    <TouchableOpacityBox boxProps={$wrapperStyle} {...rest}>
      <Text text={text} preset="medium/16" color={$colorText} />
    </TouchableOpacityBox>
  );
}

const buildColorText = (type: ButtonProps['type']): keyof Theme['colors'] => {
  if (type === 'outline' || type === 'category') {
    return 'primary50';
  }
  return 'white';
};

const buildWrapperStyle = (type: ButtonProps['type']): BoxProps => {
  const commonStyle: BoxProps = {
    padding: 'sp16',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'rd8',
  };
  if (type === 'selected') {
    return {
      ...commonStyle,
      width: 'auto',
      padding: 'sp10',
      backgroundColor: 'primary50',
      borderRadius: 'rd15',
    };
  }
  if (type === 'category') {
    return {
      ...commonStyle,
      borderWidth: 1,
      width: 'auto',
      padding: 'sp10',
      borderColor: 'primary50',
      borderRadius: 'rd15',
    };
  }
  if (type === 'outline') {
    return {
      ...commonStyle,
      borderWidth: 1,
      borderColor: 'primary50',
    };
  }

  return {
    ...commonStyle,
    backgroundColor: 'primary50',
  };
};
