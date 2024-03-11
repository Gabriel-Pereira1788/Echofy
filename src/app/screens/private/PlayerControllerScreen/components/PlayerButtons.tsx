import React from 'react';

import {PlayerStatus} from '@services';

import {Box, IconPress} from '@components';

import {mappedIconVolumeState} from '../constants/mappedVolumeState';
import {useVolumeState} from '../hooks';

type Props = {
  playerStatus: PlayerStatus;
  onSkipToNext: () => Promise<void>;
  onPlay: () => Promise<void>;
  onPause: () => Promise<void>;
  onSkipToPrevious: () => Promise<void>;
  onVolumeControl: (value: number) => Promise<void>;
};

export function PlayerButtons({
  playerStatus,
  onPlay,
  onPause,
  onSkipToNext,
  onVolumeControl,
  onSkipToPrevious,
}: Props) {
  const {volumeState, changeVolumeState} = useVolumeState(onVolumeControl);

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
      <Box alignSelf="center">
        <IconPress
          iconName={mappedIconVolumeState[volumeState]}
          size="sp25"
          color="playerButtonColor"
          onPress={changeVolumeState}
        />
      </Box>

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
          onPress={onSkipToPrevious}
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
          onPress={onSkipToNext}
        />
      </Box>
    </Box>
  );
}
