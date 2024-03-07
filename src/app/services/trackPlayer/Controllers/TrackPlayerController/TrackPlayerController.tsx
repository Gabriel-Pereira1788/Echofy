import React from 'react';
import {Modal} from 'react-native';

import {SharedScreenHeader} from '@shared';

import {BookAttribution, Box, Icon, TouchableOpacityBox} from '@components';

import {useTrackPlayerStore, useTrackPlayerStoreActions} from '../../';
import {usePlayerStore} from '../../../player';

import {TrackPlayerCover, TrackPlayerProgressBar} from './components';
import {TrackPlayerButtons} from './components/TrackPlayerButtons';

type Props = {};

export function TrackPlayerController({}: Props) {
  const player = usePlayerStore();

  const {isOpened} = useTrackPlayerStore();
  const {closeController} = useTrackPlayerStoreActions();

  const _title = player
    ? player.title.length > 30
      ? player.title.slice(0, 30) + '...'
      : player.title
    : '';

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
            <TrackPlayerCover coverURI={player.coverURI} />
            <BookAttribution title={player.title} author={player.author} />
            <TrackPlayerProgressBar />
            <TrackPlayerButtons />
          </>
        )}
      </Box>
    </Modal>
  );
}
