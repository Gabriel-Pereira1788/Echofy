import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

type SlideEventProps = {
  initialValue: number;
  slideUpValue: number;
  slideDownValue: number;
};
export function useSlideAnimated({
  initialValue,
  slideDownValue,
  slideUpValue,
}: SlideEventProps) {
  const translationY = useRef(new Animated.Value(initialValue)).current;

  const slideUp = useCallback(
    (callback?: Animated.EndCallback) => {
      Animated.timing(translationY, {
        toValue: slideUpValue, //-40,
        duration: 500,

        useNativeDriver: false,
      }).start(callback);
    },
    [translationY, slideUpValue],
  );

  const slideDown = useCallback(
    (callback?: Animated.EndCallback) => {
      Animated.timing(translationY, {
        toValue: slideDownValue, //40,
        duration: 500,
        useNativeDriver: false,
      }).start(callback);
    },
    [translationY, slideDownValue],
  );

  return {
    translationY,
    slideDown,
    slideUp,
  };
}
