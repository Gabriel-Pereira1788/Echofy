import React from 'react';

import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';

type Props = {};

export function PlayerButton({}: Props) {
  return (
    <Box
      flex={0.5}
      alignSelf="center"
      alignItems="center"
      justifyContent="center">
      <Icon iconName="play" size="sp28" color="baseIconColor" />
    </Box>
  );
}
