import React from 'react';

import {BookSkeleton, Box} from '@components';

type Props = {};

const ITENS_TO_RENDER = 8;

export default function SearchingSkeleton({}: Props) {
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
        {Array.from({length: ITENS_TO_RENDER}).map((_, index) => {
          return <BookSkeleton key={index} renderAuthor renderTitle />;
        })}
      </Box>
    </Box>
  );
}
