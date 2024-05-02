import React from 'react';

import {Review} from '@domain';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

import {ReviewAuthorInfo} from './ReviewAuthorInfo';

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({review}: ReviewCardProps) {
  return (
    <Box
      flex={1}
      gap="sp10"
      paddingVertical="sp10"
      paddingHorizontal="sp20"
      testID="review-card">
      <ReviewAuthorInfo author={review.author} voteRating={review.voteRating} />

      <Text
        text={review.content}
        align="justify"
        preset="light/14"
        setColorsTheme={{dark: 'neutral20', light: 'neutral60'}}
      />
    </Box>
  );
}
