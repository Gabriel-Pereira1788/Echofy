import React, {useRef, useState} from 'react';

import {Track} from '@infra';
import {useToastActions} from '@services';

import {Box, IconPress, ProgressCircle, ProgressCircleRef} from '@components';

import {State, mappedDownloadState} from '../constants/mappedDownloadState';
import {useChapterDownload} from '../hooks';

type Props = {
  track: Track | null;
};

export function PlayerDownloadHandler({track}: Props) {
  const [currentState, setCurrentState] = useState<State | null>(null);
  const progressRef = useRef<ProgressCircleRef>(null);

  const toast = useToastActions();
  const {hasDownloaded, download, pause, resume} = useChapterDownload({
    track,
    onStart: () => {
      setCurrentState('started');
    },
    onProgress: progress => {
      progressRef.current?.setCurrentProgress(progress);
    },
    onError: () => {
      toast.show({
        title: 'Error on download',
        message: 'Verify your connection to proceed',
        type: 'error',
      });
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
        testID="download-button"
        size="sp25"
        iconName={hasDownloaded ? 'folder' : 'download'}
        color="playerButtonColor"
        label={hasDownloaded ? 'Downloaded' : 'Download'}
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
          testID="download-actions-button"
          iconName={mappedDownloadState[currentState]!}
          color="playerButtonColor"
          size="sp25"
          onPress={toggleDownloadState}
        />
      )}
    </Box>
  );
}
