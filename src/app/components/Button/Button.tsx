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
  const $wrapperStyle = buildWrapperStyle(type, rest.disabled);
  const $colorText = buildColorText(type);
  return (
    <TouchableOpacityBox boxProps={$wrapperStyle} {...rest}>
      <Text text={text} preset="medium/16" color={$colorText} />
    </TouchableOpacityBox>
  );
}

const buildColorText = (type: ButtonProps['type']): keyof Theme['colors'] => {
  if (type === 'outline' || type === 'category') {
    return 'buttonText';
  }
  return 'white';
};

const buildWrapperStyle = (
  type: ButtonProps['type'],
  disabled?: boolean,
): BoxProps => {
  const commonStyle: BoxProps = {
    padding: 'sp16',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'rd8',
    opacity: disabled ? 0.3 : 1,
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
      borderColor: 'border',
      borderRadius: 'rd15',
    };
  }
  if (type === 'outline') {
    return {
      ...commonStyle,
      borderWidth: 1,
      borderColor: 'border',
    };
  }

  return {
    ...commonStyle,
    backgroundColor: 'primary50',
  };
};
