import React from 'react';
import {Modal} from 'react-native';

import {SharedScreenHeader} from '@shared';

import {BookAttribution, Box, Icon, TouchableOpacityBox} from '@components';

import {
  usePlayerActions,
  usePlayerModalStore,
  usePlayerModalStoreActions,
  useTrackPlayerController,
} from '../..';
import {usePlayerStore} from '../..';

import {
  PlayerCover,
  PlayerProgressBar,
  PlayerButtons,
  PlayerFooter,
} from './components';

type Props = {};

export function PlayerController({}: Props) {
  const player = usePlayerStore();
  const playerActions = usePlayerActions();
  const trackPlayerController = useTrackPlayerController();
  const _title = player
    ? player.title.length > 30
      ? player.title.slice(0, 30) + '...'
      : player.title
    : '';

  const {isOpened} = usePlayerModalStore();
  const {closeController} = usePlayerModalStoreActions();

  async function onPlay() {
    await trackPlayerController.play();
    playerActions.changeStatus('play');
  }

  async function onPause() {
    await trackPlayerController.pause();
    playerActions.changeStatus('pause');
  }

  async function onSeekTo(position: number) {
    await trackPlayerController.seekTo(position);
  }

  async function onSkipToNext() {
    await trackPlayerController.skipToNext();
  }

  async function onSkipToPrevious() {
    await trackPlayerController.skipToPrevious();
  }

  async function onVolumeControl(value: number) {
    await trackPlayerController.volumeControl(value);
  }

  return (
    <Modal
      visible={isOpened}
      animationType="slide"
      onRequestClose={closeController}>
      <Box
        flex={1}
        width={'100%'}
        height={'100%'}
        paddingHorizontal="sp20"
        backgroundColor="bgMain"
        alignItems="center">
        <SharedScreenHeader
          headerTitle={_title}
          headerLeft={
            <TouchableOpacityBox activeOpacity={0.8} onPress={closeController}>
              <Icon iconName="arrowLeft" size="sp20" color="baseIconColor" />
            </TouchableOpacityBox>
          }
        />

        {player && (
          <>
            <PlayerCover coverURI={player.coverURI} />
            <BookAttribution title={player.title} author={player.author} />
            <PlayerProgressBar
              onPlay={onPlay}
              onPause={onPause}
              onSeekTo={onSeekTo}
            />
            <PlayerButtons
              playerStatus={player.currentStatus}
              onPlay={onPlay}
              onPause={onPause}
              onSkipToNext={onSkipToNext}
              onVolumeControl={onVolumeControl}
              onSkipToPrevious={onSkipToPrevious}
            />
            <PlayerFooter />
          </>
        )}
      </Box>
    </Modal>
  );
}
