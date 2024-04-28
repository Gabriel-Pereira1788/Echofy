import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

type Props = {
  isSelected: boolean;
};

export function CarouselSelector({
  isSelected,
  ...touchableOpacityProps
}: Props & TouchableOpacityProps) {
  return (
    <TouchableOpacityBox
      testID="carousel-selector"
      boxProps={{
        width: 12,
        height: 12,
        borderRadius: 'rd100',
        backgroundColor: isSelected ? 'carouselSelected' : 'carouselBackground',
      }}
      {...touchableOpacityProps}
    />
  );
}
