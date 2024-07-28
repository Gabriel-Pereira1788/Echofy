import React from 'react';

import {audioTracker} from '@infra';
import {AppStackProps} from '@router';
import {usePlayerStore} from '@services';
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
import {usePlayerController} from './hooks';

export function PlayerControllerScreen({
  navigation,
}: AppStackProps<'PlayerControllerScreen'>) {
  const player = usePlayerStore();

  const {Modal, onOpenModal} = useModalController(PlayerSelectChapters);

  const {onPlay, onPause, closeTracker} = usePlayerController();

  return (
    <SharedWrapperScreen
      scrollEnabled
      headerTitle={player?.title}
      headerRight={
        <IconPress
          testID="close-button"
          iconName="closeSquare"
          type="light"
          size="sp23"
          color="baseIconColor"
          onPress={closeTracker}
        />
      }
      headerLeft={
        <IconPress
          testID="go-back-player-controller"
          iconName="arrowDown"
          size="sp20"
          color="baseIconColor"
          onPress={navigation.goBack}
        />
      }
      footerElement={<PlayerFooter onOpenModal={onOpenModal} />}>
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
