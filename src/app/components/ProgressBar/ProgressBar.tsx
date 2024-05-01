import React, {useEffect, useRef} from 'react';
import {Animated, ViewStyle} from 'react-native';

import {useProgressAnimated} from '@animations';
import {
  GestureEvent,
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

import {useTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';

import {makeSwipedPosition} from './makeSwipedPosition';

type Props = {
  duration: number;
  currentPosition: number;
  percentageProgress: number;
  onBegan: () => void;
  onFinishSwipe: (position: number) => Promise<void>;
};

export function ProgressBar({
  duration,
  currentPosition,
  percentageProgress,
  onBegan,
  onFinishSwipe,
}: Props) {
  const theme = useTheme();

  const currentProgressValue = useRef(0);
  const remainingProgressValue = useRef(0);

  const {progressWidth, onSetProgressValue} = useProgressAnimated();

  useEffect(() => {
    const progressValue =
      (percentageProgress * remainingProgressValue.current) / 100;

    onSetProgressValue(progressValue);
  }, [percentageProgress, onSetProgressValue]);

  async function onGestureEvent(
    event: GestureEvent<PanGestureHandlerEventPayload>,
  ) {
    const translationX = event.nativeEvent.translationX;
    if (translationX < 0) {
      const positiveNumber = translationX * -1;
      const translationValue = currentProgressValue.current - positiveNumber;

      onSetProgressValue(translationValue);
    } else {
      onSetProgressValue(translationX + currentProgressValue.current);
    }
  }

  async function onEnded(
    event: HandlerStateChangeEvent<Record<string, unknown>>,
  ) {
    const translationX = event.nativeEvent.translationX as number;
    const isPositiveValue = translationX > 0;

    if (isPositiveValue) {
      currentProgressValue.current =
        currentProgressValue.current + translationX;
      const swipedPosition = makeSwipedPosition({
        partialValue: translationX,
        totalValue: remainingProgressValue.current,
        duration: duration,
      });

      await onFinishSwipe(currentPosition + swipedPosition);
    } else {
      const newPositiveNumber = translationX * -1;
      currentProgressValue.current =
        currentProgressValue.current - newPositiveNumber;

      const swipedPosition = makeSwipedPosition({
        partialValue: newPositiveNumber,
        totalValue: remainingProgressValue.current,
        duration: duration,
      });

      await onFinishSwipe(currentPosition - swipedPosition);
    }
  }
  return (
    <Box
      {...$outerProgressContainer}
      onLayout={event => {
        remainingProgressValue.current = event.nativeEvent.layout.width;
      }}>
      <Animated.View
        style={[
          {backgroundColor: theme.colors.primary50, width: progressWidth},
          $innerProgressContainer,
        ]}>
        <PanGestureHandler
          testID="pan"
          onBegan={onBegan}
          onGestureEvent={onGestureEvent}
          onEnded={onEnded}
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
  );
}

const $innerProgressContainer: ViewStyle = {
  height: 3,
  position: 'absolute',
  alignItems: 'flex-end',
  justifyContent: 'center',
};

const $outerProgressContainer: BoxProps = {
  borderRadius: 'rd4',
  width: '100%',
  height: 3,
  backgroundColor: 'primary10',
  position: 'relative',
};
