import React from 'react';

import {Box, Category, Text} from '@components';

type Props = {};

export function SearchRecommendedCategories({}: Props) {
  return (
    <Box width={'100%'} gap="sp15" marginTop="sp20" flexWrap="wrap">
      <Text text="Recommended Categories" preset="medium/16" />
      <Box
        justifyContent="space-between"
        flexDirection="row"
        rowGap="sp15"
        flexWrap="wrap">
        <Box minWidth={'48%'}>
          <Category text="Business" />
        </Box>
        <Box minWidth={'48%'}>
          <Category text="Personal" />
        </Box>
        <Box minWidth={'48%'}>
          <Category text="Music" />
        </Box>
        <Box minWidth={'48%'}>
          <Category text="Photography" />
        </Box>
      </Box>
    </Box>
  );
}
