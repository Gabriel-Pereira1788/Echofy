import {Box, Text, TouchableOpacityBox} from '@components';
import React from 'react';

type Props = {};

export function TextDataPolicy({}: Props) {
  return (
    <Box marginVertical="sp25">
      <Box flexDirection="row" justifyContent="center">
        <Text
          preset="regular/14"
          text="By signing up, you agree to our"
          color="black">
          <Text
            text="Terms,Data Policy"
            color="accent50"
            preset="semiBold/14"
          />

          <Text preset="regular/14" text="and" color="black" />

          <Text text="Cookies Policy." color="accent50" preset="semiBold/14" />
        </Text>
      </Box>
    </Box>
  );
}
