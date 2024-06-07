import React from 'react';

import {BookCover, Box, BoxProps} from '@components';

type Props = {
  coverURI: string;
};

export function BookDetailsCover({coverURI}: Props) {
  return (
    <Box
      width={'100%'}
      alignItems="center"
      justifyContent="center"
      marginVertical="sp25"
      {...$shadowBox}>
      <BookCover height={350} uri={coverURI} disabledShadowBox />
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
