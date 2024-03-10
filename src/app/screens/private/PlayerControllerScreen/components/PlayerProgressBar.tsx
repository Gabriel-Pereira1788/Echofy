import React, {useEffect, useRef} from 'react';
import {Animated, ViewStyle} from 'react-native';

import {useProgressAnimated} from '@animations';
import {useTrackPlayerProgress} from '@services';
import {
  GestureEvent,
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

import {Box, BoxProps, Text} from '@components';
import {useTheme} from '@hooks';

import {makeSwipedPosition} from '../functions';

type Props = {
  onPause: () => Promise<void>;
  onPlay: () => Promise<void>;
  onSeekTo: (position: number) => Promise<void>;
};

export function PlayerProgressBar({onPause, onPlay, onSeekTo}: Props) {
  const theme = useTheme();
  const trackProgress = useTrackPlayerProgress();

  const remainingProgressValue = useRef(0);
  const currentProgressValue = useRef(0);
  const {progressWidth, onSetProgressValue} = useProgressAnimated();

  async function onBeginSwipeEvent() {
    await onPause();
  }

  async function onSwipeEvent(
    event: GestureEvent<PanGestureHandlerEventPayload>,
  ) {
    const translationX = event.nativeEvent.translationX;
    console.log('translation', translationX);
    if (translationX < 0) {
      const positiveNumber = translationX * -1;
      const translationValue = currentProgressValue.current - positiveNumber;

      onSetProgressValue(translationValue);
    } else {
      onSetProgressValue(translationX + currentProgressValue.current);
    }
  }

  async function onFinishSwipeEvent(
    event: HandlerStateChangeEvent<Record<string, unknown>>,
  ) {
    const translationX = event.nativeEvent.translationX as number;

    if (translationX < 0) {
      const positiveNumber = translationX * -1;
      currentProgressValue.current =
        currentProgressValue.current - positiveNumber;

      const swipedPosition = makeSwipedPosition({
        partialValue: positiveNumber,
        totalValue: remainingProgressValue.current,
        duration: trackProgress.duration,
      });

      await onSeekTo(trackProgress.position - swipedPosition);
    } else {
      currentProgressValue.current =
        currentProgressValue.current + translationX;

      const swipedPosition = makeSwipedPosition({
        partialValue: translationX,
        totalValue: remainingProgressValue.current,
        duration: trackProgress.duration,
      });

      await onSeekTo(trackProgress.position + swipedPosition);
    }

    await onPlay();
  }

  useEffect(() => {
    const progressValue =
      (trackProgress.percentageProgress * remainingProgressValue.current) / 100;

    onSetProgressValue(progressValue);
  }, [trackProgress.percentageProgress, onSetProgressValue]);

  return (
    <Box {...$wrapper}>
      <Box
        {...$outerProgressContainer}
        onLayout={event => {
          remainingProgressValue.current = event.nativeEvent.layout.width;
        }}>
        <Animated.View
          style={[
            {
              backgroundColor: theme.colors.primary50,
              width: progressWidth,
            },
            $innerProgressContainer,
          ]}>
          <PanGestureHandler
            onBegan={onBeginSwipeEvent}
            onGestureEvent={onSwipeEvent}
            onEnded={onFinishSwipeEvent}
            hitSlop={{
              top: 20,
              left: 40,
              right: 40,
              bottom: 20,
            }}>
            <Box
              width={10}
              height={10}
              backgroundColor="primary50"
              style={{borderRadius: 100}}
            />
          </PanGestureHandler>
        </Animated.View>
      </Box>

      <Box
        width={'100%'}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text text={trackProgress.minutesPosition} preset="regular/10" />
        <Text text={trackProgress.minutesDuration} preset="regular/10" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  width: '100%',
  gap: 'sp15',
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 'sp50',
};

const $outerProgressContainer: BoxProps = {
  borderRadius: 'rd4',
  width: '100%',
  height: 3,
  backgroundColor: 'primary10',
  position: 'relative',
};

const $innerProgressContainer: ViewStyle = {
  height: 3,
  position: 'absolute',
  alignItems: 'flex-end',
  justifyContent: 'center',
};
