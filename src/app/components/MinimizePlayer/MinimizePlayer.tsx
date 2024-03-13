import React, {useEffect} from 'react';
import {Animated} from 'react-native';

import {useSlideAnimated} from '@animations';
import {useNavigation} from '@react-navigation/native';
import {
  usePlayerActions,
  usePlayerStore,
  useTrackPlayerProgress,
} from '@services';
import {
  HandlerStateChangeEvent,
  PanGestureHandler,
} from 'react-native-gesture-handler';

import {useAppSafeArea} from '@hooks';

import {Box, BoxProps} from '../Box/Box';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

import {MinimizePlayerAttribution} from './MinimizePlayerAttribution';
import {MinimizePlayerButton} from './MinimizePlayerButton';
import {MinimizePlayerImage} from './MinimizePlayerImage';
import {MinimizePlayerProgress} from './MinimizePlayerProgress';

type Props = {};

export function MinimizePlayer({}: Props) {
  const navigation = useNavigation();

  const player = usePlayerStore();
  const playerActions = usePlayerActions();

  const trackProgress = useTrackPlayerProgress();

  const {bottom} = useAppSafeArea();
  const {translationY, slideUp, slideDown} = useSlideAnimated({
    initialValue: 40,
    slideUpValue: -40,
    slideDownValue: 40,
  });

  function redirectToPlayerController() {
    navigation.navigate('PlayerControllerScreen');
  }

  function handleGestureEvent(
    event: HandlerStateChangeEvent<Record<string, unknown>>,
  ) {
    const translationValue = event.nativeEvent.translationY as number;
    if (translationValue >= 20) {
      slideDown(playerActions.hide);
    }
  }

  useEffect(() => {
    if (player) {
      slideUp();
    }
  }, [player, slideUp]);

  return (
    <Box position="absolute" bottom={bottom} zIndex={0}>
      <PanGestureHandler onEnded={handleGestureEvent}>
        <Animated.View
          style={{
            transform: [{translateY: translationY}],
          }}>
          {player && (
            <TouchableOpacityBox
              activeOpacity={0.95}
              onPress={redirectToPlayerController}
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
      </PanGestureHandler>
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
