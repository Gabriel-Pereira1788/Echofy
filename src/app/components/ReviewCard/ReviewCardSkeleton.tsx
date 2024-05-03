import React from 'react';

import {Box} from '../Box/Box';
import {Skeleton} from '../Skeleton/Skeleton';

type Props = {};

export function ReviewCardSkeleton({}: Props) {
  return (
    <Box gap="sp10" paddingHorizontal="sp20" paddingVertical="sp10">
      <Box width={'100%'} flexDirection="row" gap="sp15" mb="sp10">
        <Box overflow="hidden" width={50} height={50} borderRadius="rd8">
          <Skeleton width={'100%'} height={'100%'} autoplay />
        </Box>

        <Box gap="sp10" width={'100%'}>
          <Skeleton width={'40%'} height={10} autoplay />
          <Skeleton width={'20%'} height={10} autoplay />
        </Box>
      </Box>

      <Box
        padding="sp3"
        width={'100%'}
        alignItems="flex-start"
        justifyContent="center"
        gap="sp10">
        <Skeleton width={'95%'} height={10} autoplay />
        <Skeleton width={'90%'} height={10} autoplay />
        <Skeleton width={'90%'} height={10} autoplay />
      </Box>
    </Box>
  );
}
