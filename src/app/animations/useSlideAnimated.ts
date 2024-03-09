import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

export function useSlideAnimated() {
  const translationY = useRef(new Animated.Value(40)).current;

  const slideUp = useCallback(() => {
    Animated.timing(translationY, {
      toValue: -40,
      duration: 500,

      useNativeDriver: true,
    }).start();
  }, [translationY]);

  const slideDown = useCallback(
    (callback: Animated.EndCallback) => {
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
