import {useCallback, useRef} from 'react';
import {Animated, Easing} from 'react-native';

import {dimensions} from '../helpers/utils/dimensions';

export function useSlideModalAnimated() {
  const heightValue = useRef(new Animated.Value(0)).current;
  const slideUp = useCallback(() => {
    Animated.timing(heightValue, {
      toValue: dimensions.height / 2,
      delay: 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [heightValue]);

  const slideDown = useCallback(
    (callback?: Animated.EndCallback) => {
      Animated.timing(heightValue, {
        toValue: 0,
        delay: 50,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(callback);
    },
    [heightValue],
  );

  return {
    heightValue,
    slideDown,
    slideUp,
  };
}
