import React from 'react';

import {Theme} from '@styles';

import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

type Props = {
  rating: number;
  size?: keyof Theme['spacing'];
};

const ratingCount = Array.from({length: 5});

export function StarRating({rating, size}: Props) {
  return (
    <Box flexDirection="row" gap="sp10">
      {ratingCount.map((_, index) => (
        <TouchableOpacityBox key={index} disabled>
          <Icon
            iconName="star"
            color="accent50"
            type={index >= rating ? 'bold' : 'light'}
            size={size ? size : 'sp15'}
          />
        </TouchableOpacityBox>
      ))}
    </Box>
  );
}
