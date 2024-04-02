import React from 'react';

import {useAudioTrack} from '@services';

import {Box, IconPress} from '@components';

import {mappedSpeedState} from '../constants/mappedSpeedState';
import {mappedIconVolumeState} from '../constants/mappedVolumeState';
import {useSpeedState, useVolumeState} from '../hooks';

type Props = {
  onOpenModal: () => void;
};

export function PlayerFooter({onOpenModal}: Props) {
  const {speedState, changeSpeedState} = useSpeedState();
  const {volumeState, changeVolumeState} = useVolumeState();

  const track = useAudioTrack();

  const speedText = `Speed ${mappedSpeedState[speedState]}x`;
  const chapterText = `Chapter ${
    track && track.chapterNumber ? track.chapterNumber + 1 : 1
  }`;

  console.log('[TRACK]', track);
  return (
    <Box
      flexDirection="row"
      width={'100%'}
      borderTopWidth={1}
      borderTopColor="contrast"
      gap="sp15"
      paddingTop="sp15"
      paddingHorizontal="sp20"
      justifyContent="space-between">
      <IconPress
        iconName={mappedIconVolumeState[volumeState]}
        size="sp25"
        color="playerButtonColor"
        label="Volume"
        onPress={changeVolumeState}
      />
      <IconPress
        size="sp25"
        iconName="paper"
        color="playerButtonColor"
        label={chapterText}
        onPress={onOpenModal}
      />
      <IconPress
        size="sp25"
        iconName="timeSquare"
        color="playerButtonColor"
        label={speedText}
        onPress={changeSpeedState}
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
