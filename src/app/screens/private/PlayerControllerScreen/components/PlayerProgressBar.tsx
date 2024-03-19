import React, {useEffect, useRef} from 'react';
import {Animated, ViewStyle} from 'react-native';

import {useProgressAnimated} from '@animations';
import {audioTracker} from '@infra';
import {useAudioProgress} from '@services';
import {PanGestureHandler} from 'react-native-gesture-handler';

import {Box, BoxProps, Text} from '@components';
import {useTheme} from '@hooks';

import {useSwipePosition} from '../hooks';

type Props = {
  onPause: () => Promise<void>;
  onPlay: () => Promise<void>;
};

export function PlayerProgressBar({onPause, onPlay}: Props) {
  const theme = useTheme();
  const audioProgress = useAudioProgress();

  const remainingProgressValue = useRef(0);
  const {progressWidth, onSetProgressValue} = useProgressAnimated();

  const {onGestureEvent, onEnded} = useSwipePosition({
    remainingProgressValue: remainingProgressValue.current,
    onSwipe: translatedPosition => onSetProgressValue(translatedPosition),
    onFinishSwipe: async position => {
      await audioTracker.seekTo(position);
      await onPlay();
    },
  });

  useEffect(() => {
    const progressValue =
      (audioProgress.percentageProgress * remainingProgressValue.current) / 100;

    onSetProgressValue(progressValue);
  }, [audioProgress.percentageProgress, onSetProgressValue]);

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
            testID="pan"
            onBegan={onPause}
            onGestureEvent={onGestureEvent}
            onEnded={onEnded(audioProgress.duration, audioProgress.position)}
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
        <Text
          testID="minutes-position"
          text={audioProgress.minutesPosition}
          preset="regular/10"
        />
        <Text
          testID="minutes-duration"
          text={audioProgress.minutesDuration}
          preset="regular/10"
        />
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
