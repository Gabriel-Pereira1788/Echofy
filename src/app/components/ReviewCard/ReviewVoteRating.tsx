import React from 'react';

import {Theme} from '@styles';

import {Box} from '../Box/Box';
import {IconPress} from '../Icon/IconPress';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

type Props = {
  rating: number;
  size?: keyof Theme['spacing'];
  onSelect?: (value: number) => void;
};

const ratingCount = Array.from({length: 5});

export function ReviewVoteRating({rating, size, onSelect}: Props) {
  function handlePress(value: number) {
    return () => {
      if (onSelect) {
        onSelect(value);
      }
    };
  }
  return (
    <Box flexDirection="row" gap="sp10">
      {ratingCount.map((_, index) => (
        <TouchableOpacityBox key={index} disabled>
          <IconPress
            disabled={!onSelect}
            iconName="star"
            color="accent50"
            type={index >= rating ? 'bold' : 'light'}
            size={size ? size : 'sp15'}
            onPress={handlePress(index + 1)}
          />
        </TouchableOpacityBox>
      ))}
    </Box>
  );
}
