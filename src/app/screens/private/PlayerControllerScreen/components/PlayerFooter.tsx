import React from 'react';

import {TrackMetadata} from '@services';

import {Box, IconPress} from '@components';

import {mappedSpeedState} from '../constants/mappedSpeedState';
import {useSpeedState} from '../hooks/useSpeedState';

type Props = {
  metadata: TrackMetadata | null;
  onSpeedControl: (speed: number) => Promise<void>;
  onOpenModal: () => void;
};

export function PlayerFooter({metadata, onSpeedControl, onOpenModal}: Props) {
  const {speedState, changeSpeedState} = useSpeedState(onSpeedControl);

  const speedText = `Speed ${mappedSpeedState[speedState]}x`;
  const chapterText = `Chapter ${
    metadata && metadata.currentIndex ? metadata.currentIndex + 1 : 1
  }`;

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
