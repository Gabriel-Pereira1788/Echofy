import React from 'react';

import {Box, IconPress} from '@components';

type Props = {};

export function PlayerFooter({}: Props) {
  return (
    <Box
      flexDirection="row"
      width={'100%'}
      gap="sp15"
      marginTop="sp28"
      justifyContent="space-between">
      <IconPress
        size="sp25"
        iconName="bookmark"
        color="playerButtonColor"
        label="Bookmark"
        onPress={() => {}}
      />
      <IconPress
        size="sp25"
        iconName="paper"
        color="playerButtonColor"
        label="Chapter 2"
        onPress={() => {}}
      />
      <IconPress
        size="sp25"
        iconName="timeSquare"
        color="playerButtonColor"
        label="Speed 10x"
        onPress={() => {}}
      />

      <IconPress
        size="sp25"
        iconName="download"
        color="playerButtonColor"
        label="Download"
        onPress={() => {}}
      />
    </Box>
  );
}
