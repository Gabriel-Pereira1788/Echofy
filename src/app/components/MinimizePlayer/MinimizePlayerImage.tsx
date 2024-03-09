import React from 'react';
import {Image, ImageStyle} from 'react-native';

import {Box} from '../Box/Box';

type Props = {
  uri: string;
};

export function MinimizePlayerImage({uri}: Props) {
  return (
    <Box flex={0.5}>
      <Image
        style={$imageStyle}
        source={{
          uri,
        }}
        resizeMode="stretch"
      />
    </Box>
  );
}

const $imageStyle: ImageStyle = {
  width: '100%',
  height: 70,
  borderRadius: 4,
};
