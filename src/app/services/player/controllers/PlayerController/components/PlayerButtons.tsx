import React, {useState} from 'react';

import {PlayerStatus} from '@services';

import {Box, IconPress} from '@components';

import {
  mappedIconVolumeState,
  mappedNextVolumeState,
} from '../constants/mappedVolumeState';

type Props = {
  playerStatus: PlayerStatus;
  onSkipToNext: () => Promise<void>;
  onPlay: () => Promise<void>;
  onPause: () => Promise<void>;
  onSkipToPrevious: () => Promise<void>;
  onVolumeControl: (value: number) => Promise<void>;
};

export type KeyVolumeState = 'up' | 'down' | 'mute';

export function PlayerButtons({
  playerStatus,
  onPlay,
  onPause,
  onSkipToNext,
  onVolumeControl,
  onSkipToPrevious,
}: Props) {
  const [volumeState, setVolumeState] = useState<KeyVolumeState>('up');

  async function handleChangeVolumeState() {
    const newVolumeState = mappedNextVolumeState[volumeState];

    setVolumeState(newVolumeState.nextState);
    await onVolumeControl(newVolumeState.nextValue);
  }

  console.log('playerStatus', playerStatus);
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
      <IconPress
        iconName={mappedIconVolumeState[volumeState]}
        size="sp25"
        color="playerButtonColor"
        onPress={handleChangeVolumeState}
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
          onPress={onSkipToPrevious}
        />

        <IconPress
          type="bold"
          size="sp60"
          color="white"
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
