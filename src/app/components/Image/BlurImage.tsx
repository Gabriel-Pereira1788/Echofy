import React from 'react';
import {Image, ImageProps, ViewStyle} from 'react-native';

import {BlurView} from '@react-native-community/blur';

import {useTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';

type Props = BoxProps & {
  source: ImageProps['source'];
  blurAmount?: number;
};

export function BlurImage({source, blurAmount, ...boxProps}: Props) {
  const {colorScheme} = useTheme();
  return (
    <Box overflow="hidden" {...boxProps}>
      <Image style={{width: '100%', height: '100%'}} source={source} />
      <BlurView
        style={$blurViewStyle}
        blurType={colorScheme ?? 'dark'}
        blurAmount={blurAmount ?? 5}
      />
    </Box>
  );
}

const $blurViewStyle: ViewStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: '#00000013',
};
