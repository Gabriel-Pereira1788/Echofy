import React, {useRef, useState} from 'react';

import {Track} from '@infra';

import {Box, IconPress, ProgressCircle, ProgressCircleRef} from '@components';

import {State, mappedDownloadState} from '../constants/mappedDownloadState';
import {useChapterDownload} from '../hooks';

type Props = {
  track: Track | null;
};

export function PlayerDownloadHandler({track}: Props) {
  const [currentState, setCurrentState] = useState<State | null>(null);
  const progressRef = useRef<ProgressCircleRef>(null);

  const {download, pause, resume} = useChapterDownload({
    track,
    onStart: () => {
      setCurrentState('started');
    },
    onProgress: progress => {
      progressRef.current?.setCurrentProgress(progress);
    },
    onFinish: () => {
      setCurrentState('finish');
      progressRef.current?.finish(({finished}) => {
        if (finished) {
          setCurrentState(null);
        }
      });
    },
  });

  async function toggleDownloadState() {
    if (currentState === 'started') {
      setCurrentState('paused');
      await pause();
    }
    if (currentState === 'paused') {
      setCurrentState('started');
      await resume();
    }
  }
  if (!currentState) {
    return (
      <IconPress
        size="sp25"
        iconName="download"
        color="playerButtonColor"
        label="Download"
        onPress={download}
      />
    );
  }
  return (
    <Box
      position="relative"
      alignItems="center"
      justifyContent="center"
      marginRight="sp10">
      <Box position="absolute">
        <ProgressCircle ref={progressRef} />
      </Box>
      {currentState === 'finish' ? (
        <Box width={25} height={25} />
      ) : (
        <IconPress
          iconName={mappedDownloadState[currentState]!}
          color="playerButtonColor"
          size="sp25"
          onPress={toggleDownloadState}
        />
      )}
    </Box>
  );
}
