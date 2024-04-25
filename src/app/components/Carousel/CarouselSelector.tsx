import React from 'react';

import {Box} from '../Box/Box';

type Props = {
  isSelected: boolean;
};

export function CarouselSelector({isSelected}: Props) {
  return (
    <Box
      width={12}
      height={12}
      borderRadius="rd100"
      backgroundColor={isSelected ? 'carouselSelected' : 'carouselBackground'}
    />
  );
}
