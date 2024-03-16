import React from 'react';

import {audioTracker} from '@infra';
import {PlayerStatus} from '@services';

import {Box, IconPress} from '@components';

type Props = {
  playerStatus: PlayerStatus;
  onPlay: () => Promise<void>;
  onPause: () => Promise<void>;
};

export function PlayerButtons({playerStatus, onPlay, onPause}: Props) {
  async function handleTogglePlayerAction() {
    if (playerStatus === 'play') {
      await onPause();
    } else {
      await onPlay();
    }
  }

  return (
    <Box
      width={'100%'}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <Box alignSelf="center" />

      <Box
        gap="sp20"
        alignSelf="center"
        flexDirection="row"
        flex={1}
        alignItems="center"
        justifyContent="center">
        <IconPress
          iconName="arrowLeftCircle"
          size="sp40"
          color="playerButtonColor"
          onPress={audioTracker.skipToPrevious}
        />

        <IconPress
          type="bold"
          size="sp60"
          color="baseIconColor"
          iconName={playerStatus === 'pause' ? 'play' : 'pause'}
          onPress={handleTogglePlayerAction}
        />

        <IconPress
          iconName="arrowRightCircle"
          size="sp40"
          color="playerButtonColor"
          onPress={audioTracker.skipToNext}
        />
      </Box>
    </Box>
  );
}
