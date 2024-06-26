import React from 'react';

import {Track} from '@infra';

import {BookCover, Box, Text} from '@components';

type Props = {
  track: Track;
};

export function PlayerSelectChapterItem({track}: Props) {
  return (
    <Box
      flexDirection="row"
      width={'100%'}
      padding="sp20"
      borderRadius="rd8"
      backgroundColor="contrast"
      marginVertical="sp10">
      <Box
        width={'100%'}
        flexDirection="row"
        gap="sp10"
        alignItems="center"
        justifyContent="flex-start">
        <Box width={50}>
          <BookCover uri={track.artwork} height={50} disabledShadowBox />
        </Box>
        <Box width={'85%'}>
          <Text text={track.title} />
        </Box>
      </Box>
    </Box>
  );
}
