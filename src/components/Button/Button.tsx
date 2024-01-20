import React from 'react';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';
import {Text} from '../Text/Text';
import {BoxProps} from '../Box/Box';
import {TouchableOpacityProps} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  type?: 'outline' | 'filled';
}

export function Button({text, type = 'filled', ...rest}: ButtonProps) {
  const $wrapperStyle = buildWrapperStyle(type);
  return (
    <TouchableOpacityBox boxProps={$wrapperStyle} {...rest}>
      <Text
        text={text}
        preset="medium/16"
        color={type === 'outline' ? 'primary50' : 'white'}
      />
    </TouchableOpacityBox>
  );
}

const buildWrapperStyle = (type: ButtonProps['type']): BoxProps => {
  const commonStyle: BoxProps = {
    padding: 'sp16',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'rd8',
  };

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
