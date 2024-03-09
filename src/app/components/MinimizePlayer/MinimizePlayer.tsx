import React, {useEffect} from 'react';
import {Animated} from 'react-native';

import {useSlideAnimated} from '@animations';
import {
  usePlayerStore,
  useTrackPlayerProgress,
  usePlayerModalStoreActions,
} from '@services';

import {useAppSafeArea} from '@hooks';

import {Box, BoxProps} from '../Box/Box';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

import {MinimizePlayerAttribution} from './MinimizePlayerAttribution';
import {MinimizePlayerButton} from './MinimizePlayerButton';
import {MinimizePlayerImage} from './MinimizePlayerImage';
import {MinimizePlayerProgress} from './MinimizePlayerProgress';

type Props = {};

export function MinimizePlayer({}: Props) {
  const player = usePlayerStore();
  const trackProgress = useTrackPlayerProgress();
  const {openController} = usePlayerModalStoreActions();

  const {bottom} = useAppSafeArea();
  const {translationY, slideUp} = useSlideAnimated();

  console.log('trackProgress', trackProgress);
  // const {hide} = usePlayerActions();

  useEffect(() => {
    if (player) {
      slideUp();
    }
  }, [player, slideUp]);

  return (
    <Box position="absolute" bottom={bottom} zIndex={0}>
      <Animated.View
        style={{
          transform: [{translateY: translationY}],
        }}>
        {player && (
          <TouchableOpacityBox
            activeOpacity={0.95}
            onPress={openController}
            boxProps={{width: '100%'}}>
            <MinimizePlayerProgress
              percentageProgress={trackProgress.percentageProgress}
            />
            <Box {...$boxWrapperStyle}>
              <MinimizePlayerImage uri={player.coverURI} />

              <MinimizePlayerAttribution
                title={player.title}
                author={player.author}
              />

              <MinimizePlayerButton playerStatus={player.currentStatus} />
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
