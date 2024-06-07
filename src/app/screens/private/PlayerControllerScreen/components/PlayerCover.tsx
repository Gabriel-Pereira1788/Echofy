import React from 'react';

import {BookCover, Box, BoxProps} from '@components';

type Props = {
  coverURI: string;
};

export function PlayerCover({coverURI}: Props) {
  return (
    <Box
      width={'100%'}
      borderRadius="rd12"
      marginVertical="sp25"
      backgroundColor="black"
      position="relative">
      <Box
        width={'85%'}
        height={350}
        position="absolute"
        {...$shadowBox}
        alignSelf="center"
      />
      <BookCover height={350} uri={coverURI} disabledShadowBox radius="rd12" />
    </Box>
  );
}

const $shadowBox: BoxProps = {
  backgroundColor: 'black',
  borderRadius: 'rd12',
  shadowOpacity: 0.5,
  shadowRadius: 11.62,
  elevation: 6,
  shadowColor: 'shadowCommonColor',
  shadowOffset: {
    width: 0,
    height: 10,
  },
};
