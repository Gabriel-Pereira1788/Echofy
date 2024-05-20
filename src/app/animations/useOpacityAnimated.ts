import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

type Config = {
  initialValue?: number;
  toValue?: number;
  duration?: number;
};
export function useOpacityAnimated(config?: Config) {
  const opacity = useRef(
    new Animated.Value(config && config.initialValue ? config.initialValue : 0),
  ).current;

  const show = useCallback(
    (callbackEnd?: Animated.EndCallback) => {
      Animated.timing(opacity, {
        toValue: config && config.toValue ? config.toValue : 1,
        delay: 100,
        duration: config && config.duration ? config.duration : 500,
        useNativeDriver: false,
      }).start(callbackEnd);
    },
    [config, opacity],
  );

  const hide = useCallback(
    (callbackEnd?: Animated.EndCallback) => {
      Animated.timing(opacity, {
        toValue: 0,
        delay: 100,
        duration: config && config.duration ? config.duration : 200,
        useNativeDriver: false,
      }).start(callbackEnd);
    },
    [config, opacity],
  );

  return {
    opacity,
    hide,
    show,
  };
}
