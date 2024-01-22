import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {useToastActions, useToastStore} from '@store';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

type Props = {};

const SECONDS_FOR_HIDE_TOAST = 3000;

export function Toast({}: Props) {
  const toast = useToastStore();
  const toastActions = useToastActions();

  const animatedRef = useRef(new Animated.Value(0)).current;

  const fadeIn = React.useCallback(() => {
    Animated.timing(animatedRef, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animatedRef]);

  const fadeOut = React.useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(animatedRef, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [animatedRef],
  );

  useEffect(() => {
    if (toast) {
      fadeIn();
      setTimeout(() => {
        fadeOut(toastActions.hide);
      }, SECONDS_FOR_HIDE_TOAST);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast]);

  if (!toast) {
    return null;
  }
  return (
    <Animated.View
      testID="toast"
      style={{
        alignSelf: 'center',
        position: 'absolute',
        width: '70%',
        opacity: animatedRef,
      }}>
      <Box {...$outerWrapperStyle}>
        <Box {...$backgroundStyle} />
        <Box {...$innerWrapperStyle}>
          <Box flex={1} alignItems="flex-start">
            <Icon
              iconName={toast.type === 'error' ? 'closeSquare' : 'tickSquare'}
              color="primary80"
              size="sp23"
              type="light"
            />
          </Box>
          <Box flex={3} gap="sp7">
            <Text preset="semiBold/16" text={toast.title} color="black" />
            <Text preset="regular/14" text={toast.message} color="black" />
          </Box>
          <Box flex={1} alignItems="flex-end">
            <Text text="X" color="black" />
          </Box>
        </Box>
      </Box>
    </Animated.View>
  );
}

const $backgroundStyle: BoxProps = {
  width: '90%',
  height: '100%',
  borderRadius: 'rd12',
  backgroundColor: 'primary80',
  position: 'absolute',
  left: -4,
};

const $innerWrapperStyle: BoxProps = {
  position: 'relative',
  width: '100%',
  height: '100%',
  flexDirection: 'row',
  padding: 'sp16',
  borderRadius: 'rd12',
  backgroundColor: 'white',
};
const $outerWrapperStyle: BoxProps = {
  flexDirection: 'row',
  width: '100%',
  position: 'relative',
  alignSelf: 'center',
  marginTop: 'sp50',
  borderRadius: 'rd12',
  backgroundColor: 'white',
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,

  elevation: 9,
};
