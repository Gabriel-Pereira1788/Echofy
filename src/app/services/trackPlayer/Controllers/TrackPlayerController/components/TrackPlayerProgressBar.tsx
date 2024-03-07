import React, {useCallback, useRef} from 'react';
import {Animated, Easing, ViewStyle} from 'react-native';

import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

import {Box, BoxProps, Text} from '@components';
import {useTheme} from '@hooks';

type Props = {};

export function TrackPlayerProgressBar({}: Props) {
  const theme = useTheme();

  const animatedProgressValue = useRef(new Animated.Value(0)).current;

  const onSetProgressValue = useCallback(
    (value: number) => {
      Animated.timing(animatedProgressValue, {
        toValue: value,
        duration: 50,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    },
    [animatedProgressValue],
  );

  function onSeekTo(event: GestureEvent<PanGestureHandlerEventPayload>) {
    const translationX = event.nativeEvent.translationX;

    onSetProgressValue(translationX);
  }

  return (
    <Box {...$wrapper}>
      <Box {...$outerProgressContainer}>
        <Animated.View
          style={[
            {
              backgroundColor: theme.colors.primary50,
              width: animatedProgressValue,
            },
            $innerProgressContainer,
          ]}>
          <PanGestureHandler onGestureEvent={onSeekTo} hitSlop={10}>
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
        <Text text="12:15" preset="regular/10" />
        <Text text="47:32" preset="regular/10" />
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
