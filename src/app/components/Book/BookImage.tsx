import React from 'react';
import {Image} from 'react-native';

import {Box} from '../Box/Box';

type Props = {
  height: number | '100%';
  bookImage: string;
};

export function BookImage({height, bookImage}: Props) {
  return (
    <Box height={height} width={'100%'}>
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
