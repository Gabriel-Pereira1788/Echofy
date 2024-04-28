import React from 'react';
import {Image} from 'react-native';

import {Review} from '@domain';

import {Box, StarRating, Text} from '@components';

type DetailsBookReviewItem = {
  review: Review;
};

export function DetailsBookReviewItem({review}: DetailsBookReviewItem) {
  return (
    <Box
      flex={1}
      gap="sp10"
      marginVertical="sp28"
      paddingVertical="sp10"
      paddingHorizontal="sp20">
      <Box width={'100%'} flexDirection="row" gap="sp15">
        <Box overflow="hidden" width={48} height={48} borderRadius="rd8">
          <Image
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
            source={{
              uri: review.author.profile_image,
            }}
          />
        </Box>

        <Box gap="sp3">
          <Text
            text={review.author.name}
            preset="medium/14"
            setColorsTheme={{
              dark: 'neutral5',
              light: 'neutral80',
            }}
          />

          <StarRating rating={review.voteRating} />
        </Box>
      </Box>

      <Text
        text={review.content}
        align="justify"
        preset="light/14"
        setColorsTheme={{dark: 'neutral20', light: 'neutral60'}}
      />
    </Box>
  );
}
