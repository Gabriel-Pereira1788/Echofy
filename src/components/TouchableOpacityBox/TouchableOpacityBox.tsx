import React from 'react';
import {Box, BoxProps} from '../Box/Box';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export interface ITouchableOpacityBoxProps extends TouchableOpacityProps {
  children: React.ReactNode;
  boxProps?: BoxProps;
}

export function TouchableOpacityBox({
  children,
  boxProps,
  ...rest
}: ITouchableOpacityBoxProps) {
  return (
    <TouchableOpacity {...rest}>
      <Box {...boxProps}>{children}</Box>
    </TouchableOpacity>
  );
}
