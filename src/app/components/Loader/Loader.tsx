import React from 'react';

import {pallete} from '@styles';
import LottieView from 'lottie-react-native';

type Props = {};

export function Loader({}: Props) {
  return (
    <LottieView
      style={{width: 50, height: 50}}
      source={require('./lottieFiles/loading_round.json')}
      colorFilters={[
        {
          keypath: 'icon',
          color: pallete.primary50,
        },
        {
          keypath: 'icon 2',
          color: pallete.primary50,
        },
      ]}
      autoPlay
      loop
      duration={1800}
      resizeMode="cover"
      renderMode="SOFTWARE"
    />
  );
}
