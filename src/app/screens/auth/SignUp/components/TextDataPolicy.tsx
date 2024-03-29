import React from 'react';

import {Box, Text} from '@components';

type Props = {};

export function TextDataPolicy({}: Props) {
  return (
    <Box marginVertical="sp25">
      <Box flexDirection="row" justifyContent="center">
        <Text preset="regular/14" text="By signing up, you agree to our">
          <Text
            text="Terms,Data Policy"
            color="accent50"
            preset="semiBold/14"
          />

          <Text preset="regular/14" text="and" />

          <Text text="Cookies Policy." color="accent50" preset="semiBold/14" />
        </Text>
      </Box>
    </Box>
  );
}
