import React, {useImperativeHandle, useRef} from 'react';
import {Animated} from 'react-native';

import LottieView from 'lottie-react-native';
type Props = {};

const AnimatedLottie = Animated.createAnimatedComponent(LottieView);

export type ProgressCircleRef = {
  setCurrentProgress(value: number): void;
  finish(callback: Animated.EndCallback): void;
};

export const ProgressCircle = React.forwardRef<ProgressCircleRef, Props>(
  (_, ref) => {
    const progressValue = useRef(new Animated.Value(0));

    function setCurrentProgress(value: number) {
      if (value >= 1) {
        return;
      }
      Animated.timing(progressValue.current, {
        toValue: value,
        duration: 300,
        delay: 200,
        useNativeDriver: true,
      }).start();
    }

    function finish(callback: Animated.EndCallback) {
      Animated.timing(progressValue.current, {
        toValue: 1,
        duration: 500,
        delay: 100,
        useNativeDriver: true,
      }).start(callback);
    }

    useImperativeHandle(ref, () => ({setCurrentProgress, finish}));
    return (
      <AnimatedLottie
        testID={'progress-circle-element'}
        source={require('./animations/circle.json')}
        style={{width: 50, height: 50}}
        progress={progressValue.current}
        speed={0.8}
      />
    );
  },
);
