import React from 'react';

import LottieView from 'lottie-react-native';

import {Box, BoxProps} from '../Box/Box';

export interface SkeletonProps extends Omit<BoxProps, 'overflow'> {
  autoplay?: boolean;
}

export function Skeleton({autoplay = true, ...boxProps}: SkeletonProps) {
  return (
    <Box overflow="hidden" {...boxProps}>
      <LottieView
        source={require('./animations/5mpawRUz5b.json')}
        style={{width: '100%', height: '100%'}}
        autoPlay={autoplay}
        resizeMode="cover"
      />
    </Box>
  );
}
