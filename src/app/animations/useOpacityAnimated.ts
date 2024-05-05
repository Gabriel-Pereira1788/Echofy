import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

export function useOpacityAnimated(
  initialValue?: number,
  config?: Partial<Animated.TimingAnimationConfig>,
) {
  const opacity = useRef(new Animated.Value(initialValue ?? 0)).current;

  const show = useCallback(
    (callbackEnd?: Animated.EndCallback) => {
      Animated.timing(opacity, {
        toValue: 1,
        delay: 100,
        duration: 200,
        useNativeDriver: false,
        ...config,
      }).start(callbackEnd);
    },
    [opacity, config],
  );

  const hide = useCallback(
    (callbackEnd?: Animated.EndCallback) => {
      Animated.timing(opacity, {
        toValue: 0,
        delay: 100,
        duration: 200,
        useNativeDriver: false,
        ...config,
      }).start(callbackEnd);
    },
    [opacity, config],
  );

  return {
    opacity,
    hide,
    show,
  };
}
