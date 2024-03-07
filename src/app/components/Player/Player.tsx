import React, {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {
  usePlayerStore,
  useTrackPlayerProgress,
  useTrackPlayerStoreActions,
} from '@services';

import {useAppSafeArea} from '@hooks';

import {Box, BoxProps} from '../Box/Box';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

import {PlayerAttribution} from './PlayerAttribution';
import {PlayerButton} from './PlayerButton';
import {PlayerImage} from './PlayerImage';
import {PlayerProgress} from './PlayerProgress';

type Props = {};

export function Player({}: Props) {
  const player = usePlayerStore();
  const trackProgress = useTrackPlayerProgress();
  const {openController} = useTrackPlayerStoreActions();

  const {bottom} = useAppSafeArea();

  console.log('trackProgress', trackProgress);
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

  useEffect(() => {
    if (player) {
      slideUp();
    }
  }, [player, slideUp]);

  return (
    <Box position="absolute" bottom={bottom} zIndex={0}>
      <Animated.View
        style={{
          transform: [{translateY: displayY}],
        }}>
        {player && (
          <TouchableOpacityBox
            activeOpacity={0.95}
            onPress={openController}
            boxProps={{width: '100%'}}>
            <PlayerProgress
              percentageProgress={trackProgress.percentageProgress}
            />
            <Box {...$boxWrapperStyle}>
              <PlayerImage uri={player.coverURI} />

              <PlayerAttribution title={player.title} author={player.author} />

              <PlayerButton />
            </Box>
          </TouchableOpacityBox>
        )}
      </Animated.View>
    </Box>
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
