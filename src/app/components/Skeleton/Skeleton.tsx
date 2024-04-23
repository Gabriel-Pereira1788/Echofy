import React from 'react';

import LottieView from 'lottie-react-native';

import {useTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';

export interface SkeletonProps extends Omit<BoxProps, 'overflow'> {
  autoplay?: boolean;
}

const mappedSkeletons: Record<'light' | 'dark', string> = {
  light: require('./animations/lightSkeleton.json'),
  dark: require('./animations/darkSkeleton.json'),
};
export function Skeleton({autoplay = true, ...boxProps}: SkeletonProps) {
  const theme = useTheme();

  const skeleton =
    mappedSkeletons[theme.colorScheme ? theme.colorScheme : 'light'];

  return (
    <Box overflow="hidden" {...boxProps} borderRadius="rd12">
      <LottieView
        source={skeleton}
        style={{width: '100%', height: '100%'}}
        autoPlay={autoplay}
        loop
        speed={0.5}
        resizeMode="cover"
      />
    </Box>
  );
}
