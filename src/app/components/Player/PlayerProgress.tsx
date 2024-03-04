import React from 'react';

import {Box} from '../Box/Box';

type Props = {};

export function PlayerProgress({}: Props) {
  return (
    <Box width={'100%'} position="relative" flexDirection="row">
      <Box
        width={'100%'}
        backgroundColor="primary10"
        height={3}
        flexDirection="row"
      />
      <Box
        flexDirection="row"
        width={'40%'}
        backgroundColor="primary50"
        height={3}
        position="absolute"
      />
    </Box>
  );
}
