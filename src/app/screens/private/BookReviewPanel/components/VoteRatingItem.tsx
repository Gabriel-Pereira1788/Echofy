import React from 'react';

import {Box, Text} from '@components';

type Props = {index: number; count: number; percentage: number};

export function VoteRatingItem({index, count, percentage}: Props) {
  return (
    <Box
      testID="vote-rating-item"
      flexDirection="row"
      width={'90%'}
      alignItems="center"
      gap="sp10"
      justifyContent="space-between">
      <Text text={`${index + 1}`} color="white" />
      <Box backgroundColor="primary20" width={'85%'}>
        <Box
          testID="inner-bar"
          backgroundColor="white"
          width={`${percentage}%`}
          height={3}
          borderRadius="rd8"
        />
      </Box>
      <Text text={`${count}`} preset="regular/10" color="white" />
    </Box>
  );
}
