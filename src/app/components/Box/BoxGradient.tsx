import React from 'react';
import {ViewStyle} from 'react-native';

import {Theme} from '@styles';
import LinearGradient from 'react-native-linear-gradient';

import {useTheme} from '@hooks';

import {Box, BoxProps} from './Box';

type Dimensions = {x: number; y: number};

type BoxGradientProps = BoxProps & {
  colors: Array<keyof Theme['colors']>;
  startAxis?: Dimensions;
  endAxis?: Dimensions;
  children?: React.ReactNode;
  style?: ViewStyle;
};

export function BoxGradient({
  children,
  startAxis,
  endAxis,
  style,
  colors,
  ...boxProps
}: BoxGradientProps) {
  const theme = useTheme();
  const $colors = colors.map(colorKey =>
    colorKey === 'transparent' ? 'transparent' : theme.colors[colorKey],
  );
  return (
    <Box width={'100%'} {...boxProps} overflow="hidden" style={style}>
      <LinearGradient
        start={startAxis}
        end={endAxis}
        colors={$colors}
        style={{width: '100%', height: '100%'}}>
        {children}
      </LinearGradient>
    </Box>
  );
}
