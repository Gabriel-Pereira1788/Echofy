import React, {useEffect} from 'react';

import {PlayerStatus, TrackState} from '@services';

import {Box, IconPress} from '@components';

import {mappedIconVolumeState} from '../constants/mappedVolumeState';
import {useVolumeState} from '../hooks';

type Props = {
  playerStatus: PlayerStatus;
  trackState: TrackState;
  onSkipToNext: () => Promise<void>;
  onPlay: () => Promise<void>;
  onPause: () => Promise<void>;
  onSkipToPrevious: () => Promise<void>;
  onVolumeControl: (value: number) => Promise<void>;
};

export function PlayerButtons({
  playerStatus,
  trackState,
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

  useEffect(() => {
    if (trackState === 'playing') {
      onVolumeControl(1);
    }
  }, [trackState, onVolumeControl]);

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
        onPress={changeVolumeState}
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
