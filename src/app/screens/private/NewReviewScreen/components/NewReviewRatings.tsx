import React from 'react';

import {Box, ReviewVoteRating, Text} from '@components';

import {useNewReviewScreenState} from '../store';

export function NewReviewRatings() {
  const [rating, setRating] = useNewReviewScreenState('rating');
  return (
    <Box width={'100%'} gap="sp15" alignItems="flex-start">
      <Text text="Tap to rate" />
      <ReviewVoteRating rating={rating} size="sp25" onSelect={setRating} />
    </Box>
  );
}
