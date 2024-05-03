import React from 'react';

import {SkeletonsList} from '@super-components';

import {Box, ReviewCardSkeleton} from '@components';

type Props = {};

export function BookReviewPanelSkeleton({}: Props) {
  return (
    <Box padding="sp28">
      <SkeletonsList
        itensToRender={5}
        renderItem={() => <ReviewCardSkeleton />}
      />
    </Box>
  );
}
