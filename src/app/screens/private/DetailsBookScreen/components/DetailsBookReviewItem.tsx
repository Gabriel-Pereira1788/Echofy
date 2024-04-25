import React from 'react';
import {Image} from 'react-native';

import {Box, Text} from '@components';

type StarRating = 1 | 2 | 3 | 4 | 5;
type DetailsBookReviewItem = {
  user: {
    coverUrl: string;
    name: string;
  };
  starRating: StarRating;
  review: string;
};

export function DetailsBookReviewItem({
  user,
  starRating,
  review,
}: DetailsBookReviewItem) {
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
              uri: user.coverUrl,
            }}
          />
        </Box>

        <Box gap="sp3">
          <Text
            text={user.name}
            preset="medium/14"
            setColorsTheme={{
              dark: 'neutral5',
              light: 'neutral80',
            }}
          />

          <Text text={String(starRating)} preset="medium/14" color="accent50" />
        </Box>
      </Box>

      <Text
        text={review}
        align="justify"
        preset="light/14"
        setColorsTheme={{dark: 'neutral20', light: 'neutral60'}}
      />
    </Box>
  );
}
