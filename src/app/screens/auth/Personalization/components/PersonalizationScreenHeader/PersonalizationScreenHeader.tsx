import React from 'react';

import {Box, Text} from '@components';

export function PersonalizationScreenHeader() {
  return (
    <Box gap="sp10">
      <Text
        text="Personalize Suggestion"
        color="neutral80"
        preset="semiBold/16"
      />
      <Text
        text="Choose min 3 topic you like, we will give you more often that relate to it."
        color="neutral80"
        preset="regular/14"
      />
    </Box>
  );
}
