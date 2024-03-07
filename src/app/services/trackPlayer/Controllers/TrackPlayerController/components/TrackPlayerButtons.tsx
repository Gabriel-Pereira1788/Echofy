import React from 'react';

import {Box, IconPress} from '@components';

type Props = {};

export function TrackPlayerButtons({}: Props) {
  return (
    <Box
      width={'100%'}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <IconPress
        iconName="volumeUp"
        size="sp25"
        color="playerButtonColor"
        onPress={() => {}}
      />

      <Box
        gap="sp20"
        flexDirection="row"
        flex={1}
        alignItems="center"
        justifyContent="center">
        <IconPress
          iconName="arrowLeftCircle"
          size="sp40"
          color="playerButtonColor"
          onPress={() => {}}
        />

        <IconPress
          iconName="play"
          type="bold"
          size="sp60"
          color="white"
          onPress={() => {}}
        />

        <IconPress
          iconName="arrowRightCircle"
          size="sp40"
          color="playerButtonColor"
          onPress={() => {}}
        />
      </Box>
    </Box>
  );
}
