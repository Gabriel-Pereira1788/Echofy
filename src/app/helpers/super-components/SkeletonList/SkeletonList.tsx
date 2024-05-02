import React from 'react';

import {Box} from '@components';

type SkeletonListProps = {
  renderItem: (index: number) => JSX.Element;
  itensToRender: number;
};

export function SkeletonsList({renderItem, itensToRender}: SkeletonListProps) {
  return (
    <Box gap="sp10" width={'100%'} flex={1}>
      <Box
        flex={1}
        rowGap="sp25"
        width={'100%'}
        flexWrap="wrap"
        flexDirection="row"
        testID="results-list"
        justifyContent="space-between">
        {Array.from({length: itensToRender}).map((_, index) => {
          return renderItem(index);
        })}
      </Box>
    </Box>
  );
}
