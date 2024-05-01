import React from 'react';

import {audioTracker} from '@infra';
import {useAudioProgress} from '@services';

import {Box, BoxProps, ProgressBar, Text} from '@components';

type Props = {
  onPause: () => Promise<void>;
  onPlay: () => Promise<void>;
};

export function PlayerProgressBar({onPause, onPlay}: Props) {
  const audioProgress = useAudioProgress();

  async function onFinishSwipe(position: number) {
    await audioTracker.seekTo(position);
    await onPlay();
  }

  return (
    <Box {...$wrapper}>
      <ProgressBar
        onBegan={onPause}
        onFinishSwipe={onFinishSwipe}
        duration={audioProgress.duration}
        currentPosition={audioProgress.position}
        percentageProgress={audioProgress.percentageProgress}
      />

      <Box
        width={'100%'}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text
          testID="minutes-position"
          text={audioProgress.minutesPosition}
          preset="regular/10"
        />
        <Text
          testID="minutes-duration"
          text={audioProgress.minutesDuration}
          preset="regular/10"
        />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  width: '100%',
  gap: 'sp15',
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 'sp50',
};
