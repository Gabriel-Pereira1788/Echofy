import React from 'react';

import {AppStackProps} from '@router';
import {
  usePlayerActions,
  usePlayerStore,
  useTrackPlayerController,
} from '@services';
import {SharedWrapperScreen} from '@shared';

import {BookAttribution, IconPress} from '@components';
import {useModalController} from '@hooks';

import {
  PlayerCover,
  PlayerProgressBar,
  PlayerButtons,
  PlayerFooter,
  PlayerSelectChapters,
} from './components';

export function PlayerControllerScreen({
  navigation,
}: AppStackProps<'PlayerControllerScreen'>) {
  const player = usePlayerStore();
  const playerActions = usePlayerActions();
  const trackPlayerController = useTrackPlayerController();
  const {Modal, onOpenModal} = useModalController(PlayerSelectChapters);
  const _title = player
    ? player.title.length > 30
      ? player.title.slice(0, 30) + '...'
      : player.title
    : '';

  async function onPlay() {
    await trackPlayerController.play();
    playerActions.changeStatus('play');
  }

  async function onPause() {
    await trackPlayerController.pause();
    playerActions.changeStatus('pause');
  }

  async function goBack() {
    navigation.goBack();
  }

  function handleOpenModal() {
    onOpenModal();
  }

  return (
    <SharedWrapperScreen
      scrollEnabled
      headerTitle={_title}
      headerLeft={
        <IconPress
          iconName="arrowDown"
          size="sp20"
          color="baseIconColor"
          onPress={goBack}
        />
      }
      footerElement={
        <PlayerFooter
          onOpenModal={handleOpenModal}
          metadata={trackPlayerController.metadata}
          onSpeedControl={trackPlayerController.setRate}
        />
      }>
      <Modal
        trackChapters={trackPlayerController.tracks}
        onSkipTo={trackPlayerController.skipTo}
      />
      {player && (
        <>
          <PlayerCover coverURI={player.coverURI} />
          <BookAttribution title={player.title} author={player.author} />
          <PlayerProgressBar
            onPlay={onPlay}
            onPause={onPause}
            onSeekTo={trackPlayerController.seekTo}
          />
          <PlayerButtons
            onPlay={onPlay}
            onPause={onPause}
            playerStatus={player.currentStatus}
            onSkipToNext={trackPlayerController.skipToNext}
            onVolumeControl={trackPlayerController.volumeControl}
            onSkipToPrevious={trackPlayerController.skipToPrevious}
          />
        </>
      )}
    </SharedWrapperScreen>
  );
}
