import React, {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {usePlayerActions, usePlayerStore} from '@store';

import {Box, BoxProps} from '../Box/Box';

import {PlayerAttribution} from './PlayerAttribution';
import {PlayerButton} from './PlayerButton';
import {PlayerImage} from './PlayerImage';
import {PlayerProgress} from './PlayerProgress';

type Props = {};

export function Player({}: Props) {
  const player = usePlayerStore();
  const displayY = useRef(new Animated.Value(40)).current;

  const {stop} = usePlayerActions();
  const slideUp = useCallback(() => {
    Animated.timing(displayY, {
      toValue: -40,
      duration: 500,

      useNativeDriver: true,
    }).start();
  }, [displayY]);

  const slideDown = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(displayY, {
        toValue: 40,
        duration: 500,
        useNativeDriver: true,
      }).start(callback);
    },
    [displayY],
  );

  useEffect(() => {
    if (player) {
      slideUp();
      setTimeout(() => {
        slideDown(stop);
      }, 3000);
    }
  }, [player, slideUp, slideDown, stop]);

  return (
    <Box position="absolute" bottom={0}>
      <Animated.View
        style={{
          transform: [{translateY: displayY}],
        }}>
        {player && (
          <Box width={'100%'}>
            <PlayerProgress />
            <Box {...$boxWrapperStyle}>
              <PlayerImage uri={player.coverURI} />

              <PlayerAttribution title={player.title} author={player.author} />

              <PlayerButton />
            </Box>
          </Box>
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
