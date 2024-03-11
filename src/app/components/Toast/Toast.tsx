import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {useSlideAnimated} from '@animations';
import {useToastActions, useToastStore} from '@services';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

type Props = {};

const SECONDS_FOR_HIDE_TOAST = 3000;

export function Toast({}: Props) {
  const toast = useToastStore();
  const toastActions = useToastActions();

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const {translationY, slideDown, slideUp} = useSlideAnimated({
    initialValue: -40,
    slideUpValue: 40,
    slideDownValue: -40,
  });

  function onClose() {
    slideUp(toastActions.hide);
    clearTimeout(timeoutRef.current);
  }

  useEffect(() => {
    if (toast) {
      slideDown();
      timeoutRef.current = setTimeout(() => {
        slideUp(toastActions.hide);
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
        width: '70%',
        transform: [{translateY: translationY}],
      }}>
      <Box {...$outerWrapperStyle}>
        <Box {...$backgroundStyle} />
        <Box {...$innerWrapperStyle}>
          <Box flex={1} alignItems="flex-start">
            <Icon
              iconName={toast.type === 'error' ? 'closeSquare' : 'tickSquare'}
              color="alertColor"
              size="sp23"
              type="light"
            />
          </Box>
          <Box flex={3} gap="sp7">
            <Text preset="semiBold/16" text={toast.title} />
            {toast.message && <Text preset="regular/14" text={toast.message} />}
          </Box>
          <TouchableOpacityBox
            onPress={onClose}
            boxProps={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text text="X" />
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
  backgroundColor: 'alertColor',
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
  marginTop: 'sp50',
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
