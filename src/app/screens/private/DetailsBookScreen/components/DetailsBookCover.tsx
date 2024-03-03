import React from 'react';
import {Image} from 'react-native';

import {Box, BoxProps} from '@components';

type Props = {
  imageUrl: string;
};

export function DetailsBookCover({imageUrl}: Props) {
  return (
    <Box
      width={'90%'}
      height={300}
      alignItems="center"
      justifyContent="center"
      marginVertical="sp25"
      {...$shadowBox}>
      <Image
        testID="book-image-cover"
        style={{width: '100%', height: '100%', borderRadius: 4}}
        source={{
          uri: imageUrl,
        }}
        resizeMode="stretch"
      />
    </Box>
  );
}

const $shadowBox: BoxProps = {
  backgroundColor: 'black',
  borderRadius: 'rd12',
  shadowOpacity: 0.53,
  shadowRadius: 3.62,
  elevation: 6,
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: 2,
  },
};
