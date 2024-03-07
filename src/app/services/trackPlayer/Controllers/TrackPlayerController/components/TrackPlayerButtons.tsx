import React from 'react';

import {Box, Icon, TouchableOpacityBox} from '@components';

type Props = {};

export function TrackPlayerButtons({}: Props) {
  return (
    <Box
      width={'100%'}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      {/* TODO: Create "IconPress Component " */}
      <TouchableOpacityBox>
        <Icon iconName="volumeUp" size="sp20" color="playerButtonColor" />
      </TouchableOpacityBox>

      <Box
        gap="sp20"
        flexDirection="row"
        flex={1}
        alignItems="center"
        justifyContent="center">
        <TouchableOpacityBox>
          <Icon
            iconName="arrowLeftCircle"
            size="sp40"
            color="playerButtonColor"
          />
        </TouchableOpacityBox>
        <TouchableOpacityBox>
          <Icon iconName="play" type="bold" size="sp60" color="white" />
        </TouchableOpacityBox>
        <TouchableOpacityBox>
          <Icon
            iconName="arrowRightCircle"
            size="sp40"
            color="playerButtonColor"
          />
        </TouchableOpacityBox>
      </Box>
    </Box>
  );
}
