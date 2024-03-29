import React from 'react';

import {Box, Text} from '@components';

type Props = {};

export function SocialSignIn({}: Props) {
  return (
    <>
      <Box alignSelf="center">
        <Text text="Or login with" preset="regular/14" />
      </Box>
      <Box
        gap="sp15"
        flexDirection="row"
        alignItems="center"
        justifyContent="center">
        <Box
          paddingVertical="sp28"
          paddingHorizontal="sp50"
          borderRadius="rd8"
          borderColor="neutral80"
          borderWidth={1}
        />
        <Box
          paddingVertical="sp28"
          paddingHorizontal="sp50"
          borderRadius="rd8"
          borderColor="neutral80"
          borderWidth={1}
        />
        <Box
          paddingVertical="sp28"
          paddingHorizontal="sp50"
          borderRadius="rd8"
          borderColor="neutral80"
          borderWidth={1}
        />
      </Box>
    </>
  );
}
