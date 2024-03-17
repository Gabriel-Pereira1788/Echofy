import React from 'react';

import {audioTracker} from '@infra';
import {AppStackProps} from '@router';
import {usePlayerActions, usePlayerStore} from '@services';
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

  const {Modal, onOpenModal} = useModalController(PlayerSelectChapters);

  const _title = player
    ? player.title.length > 30
      ? player.title.slice(0, 30) + '...'
      : player.title
    : '';

  async function onPlay() {
    await audioTracker.play();
    playerActions.changeStatus('play');
  }

  async function onPause() {
    await audioTracker.pause();
    playerActions.changeStatus('pause');
  }

  async function closeTracker() {
    goBack();
    await audioTracker.reset();
    await audioTracker.setVolume(1);
    playerActions.hide();
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
      headerRight={
        <IconPress
          iconName="closeSquare"
          type="light"
          size="sp23"
          color="baseIconColor"
          onPress={closeTracker}
        />
      }
      headerLeft={
        <IconPress
          iconName="arrowDown"
          size="sp20"
          color="baseIconColor"
          onPress={goBack}
        />
      }
      footerElement={<PlayerFooter onOpenModal={handleOpenModal} />}>
      <Modal onSkipTo={audioTracker.skipTo} />
      {player && (
        <>
          <PlayerCover coverURI={player.coverURI} />
          <BookAttribution title={player.title} author={player.author} />
          <PlayerProgressBar onPlay={onPlay} onPause={onPause} />
          <PlayerButtons
            onPlay={onPlay}
            onPause={onPause}
            playerStatus={player.currentStatus}
          />
        </>
      )}
    </SharedWrapperScreen>
  );
}
