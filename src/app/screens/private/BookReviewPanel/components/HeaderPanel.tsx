import React from 'react';

import {Review} from '@domain';

import {Box, Text, BoxGradient, ReviewVoteRating, IconPress} from '@components';
import {useAppSafeArea} from '@hooks';

import {makeVoteAverage} from '../functions/makeVoteAverage';
import {makeVoteRatings} from '../functions/makeVoteRatings';

import {VoteRatingItem} from './VoteRatingItem';

type Props = {
  bookTitle: string;
  reviews?: Review[];
  goBack: () => void;
  redirectToNewReviewScreen: () => void;
};

export function HeaderPanel({
  reviews,
  bookTitle,
  goBack,
  redirectToNewReviewScreen,
}: Props) {
  const {top} = useAppSafeArea();

  const voteAverage = makeVoteAverage(reviews);
  const voteRatings = makeVoteRatings(reviews);

  return (
    <BoxGradient
      flex={1}
      marginBottom="sp10"
      borderBottomEndRadius="rd40"
      startAxis={{x: 5, y: 2}}
      endAxis={{x: 9, y: 1}}
      colors={['primary50', 'primary60', 'primary20']}>
      <Box style={{marginTop: top}}>
        <Box
          flexDirection="row"
          width={'100%'}
          alignItems="center"
          justifyContent="space-between"
          marginBottom="sp15"
          paddingHorizontal="sp20">
          <IconPress
            testID="go-back-element"
            iconName="arrowLeft"
            color="white"
            size="sp23"
            onPress={goBack}
          />
          <Text text={bookTitle} color="white" />
          <IconPress
            testID="new-review-screen-button"
            iconName="plus"
            color="white"
            size="sp25"
            onPress={redirectToNewReviewScreen}
          />
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          gap="sp20"
          padding="sp20">
          <Box gap="sp15" alignItems="center" flex={1}>
            <Text text={voteAverage} preset="bold/40" color="white" />
            <ReviewVoteRating rating={5} size="sp10" />
          </Box>

          <Box gap="sp15" alignItems="flex-end" flex={2.5} paddingRight="sp20">
            {voteRatings
              .map((item, index) => (
                <VoteRatingItem
                  key={index}
                  index={index}
                  count={item.count}
                  percentage={item.percentage}
                />
              ))
              .reverse()}
          </Box>
        </Box>
      </Box>
    </BoxGradient>
  );
}
