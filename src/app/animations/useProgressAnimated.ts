import {useCallback, useRef} from 'react';
import {Animated, Easing} from 'react-native';

export function useProgressAnimated() {
  const progressWidth = useRef(new Animated.Value(0)).current;

  const onSetProgressValue = useCallback(
    (value: number) => {
      Animated.timing(progressWidth, {
        toValue: value,
        duration: 50,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    },
    [progressWidth],
  );

  return {
    progressWidth,
    onSetProgressValue,
  };
}
