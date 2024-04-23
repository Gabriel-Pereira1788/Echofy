import React from 'react';

import {dimensions} from '@utils';

import {Box} from '../Box/Box';
import {Skeleton} from '../Skeleton/Skeleton';

type Props = {};

export function BestSellerCardSkeleton({}: Props) {
  return (
    <Box
      paddingVertical="sp10"
      paddingHorizontal="sp15"
      width={dimensions.width - 20}
      height={200}
      borderRadius="rd15"
      gap="sp10"
      marginBottom="sp50"
      backgroundColor="contrast"
      flexDirection="row">
      <Box marginBottom="sp16">
        <Skeleton autoplay width={140} height={'110%'} borderRadius="rd12" />
      </Box>

      <Box
        width={'100%'}
        alignItems="flex-start"
        justifyContent="space-between"
        gap="sp7">
        <Box marginTop="sp10" width={'100%'} gap="sp10">
          <Skeleton width={'40%'} autoplay height={10} />
          <Skeleton width={'20%'} autoplay height={10} />
        </Box>
        <Box gap="sp10" width={'90%'} marginBottom="sp40">
          <Skeleton width={'30%'} autoplay height={10} />
          <Skeleton width={'40%'} autoplay height={10} />
          <Skeleton width={'60%'} autoplay height={10} />
        </Box>
      </Box>
    </Box>
  );
}
