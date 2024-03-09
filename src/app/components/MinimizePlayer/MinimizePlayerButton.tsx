import React from 'react';

import {PlayerStatus} from '@services';

import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';

type Props = {
  playerStatus: PlayerStatus;
};

export function MinimizePlayerButton({playerStatus}: Props) {
  return (
    <Box
      flex={0.5}
      alignSelf="center"
      alignItems="center"
      justifyContent="center">
      <Icon
        iconName={playerStatus === 'pause' ? 'play' : 'pause'}
        size="sp28"
        color="baseIconColor"
      />
    </Box>
  );
}
