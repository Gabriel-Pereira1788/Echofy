import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';

import {usePlayerStore, useTrackPlayerState} from '@services';

import {Box, BoxProps} from '../Box/Box';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

import {PlayerAttribution} from './PlayerAttribution';
import {PlayerButton} from './PlayerButton';
import {PlayerImage} from './PlayerImage';
import {PlayerModalController} from './PlayerModalController';
import {PlayerProgress} from './PlayerProgress';

type Props = {};

export function Player({}: Props) {
  const player = usePlayerStore();
  const trackState = useTrackPlayerState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log('trackState', trackState);
  const displayY = useRef(new Animated.Value(40)).current;

  // const {hide} = usePlayerActions();
  const slideUp = useCallback(() => {
    Animated.timing(displayY, {
      toValue: -40,
      duration: 500,

      useNativeDriver: true,
    }).start();
  }, [displayY]);

  // const slideDown = useCallback(
  //   (callback: Animated.EndCallback) => {
  //     Animated.timing(displayY, {
  //       toValue: 40,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }).start(callback);
  //   },
  //   [displayY],
  // );

  function onOpen() {
    setIsModalOpen(true);
  }

  function onClose() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (player) {
      slideUp();
    }
  }, [player, slideUp]);

  return (
    <>
      {player && (
        <PlayerModalController
          isOpen={isModalOpen}
          author={player.author}
          coverURI={player.coverURI}
          title={player.title}
          onClose={onClose}
        />
      )}
      <Box position="absolute" bottom={0}>
        <Animated.View
          style={{
            transform: [{translateY: displayY}],
          }}>
          {player && (
            <TouchableOpacityBox
              activeOpacity={0.8}
              onPress={onOpen}
              boxProps={{width: '100%'}}>
              <PlayerProgress />
              <Box {...$boxWrapperStyle}>
                <PlayerImage uri={player.coverURI} />

                <PlayerAttribution
                  title={player.title}
                  author={player.author}
                />

                <PlayerButton />
              </Box>
            </TouchableOpacityBox>
          )}
        </Animated.View>
      </Box>
    </>
  );
}

const $boxWrapperStyle: BoxProps = {
  width: '100%',
  flexDirection: 'row',
  gap: 'sp10',
  backgroundColor: 'bgMain',
  alignItems: 'flex-start',
  padding: 'sp10',
  justifyContent: 'space-between',
};
