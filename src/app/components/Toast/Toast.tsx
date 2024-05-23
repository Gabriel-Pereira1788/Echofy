import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {useOpacityAnimated} from '@animations';
import {useToastActions, useToastStore} from '@services';

import {useAppSafeArea} from '@hooks';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

import {SECONDS_FOR_HIDE_TOAST, mappedColorTypeToast} from './toastConstants';

type Props = {};

export function Toast({}: Props) {
  const toast = useToastStore();

  const toastActions = useToastActions();

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const {top} = useAppSafeArea();
  const {opacity, show, hide} = useOpacityAnimated({duration: 350});

  const $color = toast ? mappedColorTypeToast[toast.type] : 'alertColor';
  function onClose() {
    hide(toastActions.hide);
    clearTimeout(timeoutRef.current);
  }

  useEffect(() => {
    if (toast) {
      show();
      timeoutRef.current = setTimeout(() => {
        hide(toastActions.hide);
      }, SECONDS_FOR_HIDE_TOAST);
    }

    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
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
        zIndex: 10,
        width: '70%',
        marginTop: top,
        opacity: opacity,
      }}>
      <Box {...$outerWrapperStyle}>
        <Box {...$backgroundStyle} backgroundColor={$color} />
        <Box {...$innerWrapperStyle}>
          <Box flex={1} alignItems="flex-start">
            <Icon
              iconName={toast.type === 'error' ? 'closeSquare' : 'tickSquare'}
              color={$color}
              size="sp23"
              type="light"
            />
          </Box>
          <Box flex={3} gap="sp7">
            <Text preset="semiBold/16" text={toast.title} />
            {toast.message && <Text preset="medium/14" text={toast.message} />}
          </Box>
          <TouchableOpacityBox
            onPress={onClose}
            boxProps={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text text="X" preset="medium/10" />
          </TouchableOpacityBox>
        </Box>
      </Box>
    </Animated.View>
  );
}

const $backgroundStyle: BoxProps = {
  width: '90%',
  height: '100%',
  borderRadius: 'rd12',

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
  backgroundColor: 'contrast',
};
const $outerWrapperStyle: BoxProps = {
  flexDirection: 'row',
  width: '100%',
  position: 'relative',
  alignSelf: 'center',

  borderRadius: 'rd12',
  backgroundColor: 'contrast',
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,

  elevation: 9,
};
