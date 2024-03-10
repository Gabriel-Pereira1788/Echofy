import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

export function useSlideAnimated(initialValue: number = 40) {
  const translationY = useRef(new Animated.Value(initialValue)).current;

  const slideUp = useCallback(
    (callback?: Animated.EndCallback) => {
      Animated.timing(translationY, {
        toValue: -40,
        duration: 500,

        useNativeDriver: true,
      }).start(callback);
    },
    [translationY],
  );

  const slideDown = useCallback(
    (callback?: Animated.EndCallback) => {
      Animated.timing(translationY, {
        toValue: 40,
        duration: 500,
        useNativeDriver: true,
      }).start(callback);
    },
    [translationY],
  );

  return {
    translationY,
    slideDown,
    slideUp,
  };
}
