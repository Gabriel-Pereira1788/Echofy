import React from 'react';
import {Image} from 'react-native';

import {Box, BoxProps} from '../Box/Box';

type Props = {
  height: number | '100%';
  bookImage: string;
};

export function BookImage({height, bookImage}: Props) {
  return (
    <Box
      height={height}
      width={'100%'}
      backgroundColor="transparent"
      borderRadius="rd15"
      {...$shadowBox}>
      <Image
        testID="book-image"
        style={{width: '100%', height: '100%', borderRadius: 10}}
        source={{
          uri: bookImage,
        }}
        resizeMode="stretch"
      />
    </Box>
  );
}

const $shadowBox: BoxProps = {
  shadowOpacity: 0.53,
  shadowRadius: 2.62,
  elevation: 4,
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: 2,
  },
};
