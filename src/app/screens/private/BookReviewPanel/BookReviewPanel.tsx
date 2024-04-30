import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Review, useReviewsList} from '@domain';
import {CommonStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';
import {RenderIF} from '@utils';

import {Box, ReviewCard} from '@components';

import {HeaderPanel} from './components/HeaderPanel';

export function BookReviewPanel({
  route,
  navigation,
}: CommonStackProps<'BookReviewPanel'>) {
  const {bookId, bookTitle} = route.params;

  const {reviews} = useReviewsList(bookId);

  function redirectToNewReviewScreen() {
    navigation.navigate('NewReviewScreen', {
      bookId,
    });
  }

  const renderItem = useCallback(
    ({item, index}: ListRenderItemInfo<Review>) => {
      return <ReviewCard key={index} review={item} />;
    },
    [],
  );

  return (
    <SharedWrapperScreen customPadding>
      <RenderIF condition={reviews && reviews.length > 0}>
        <FlatList
          testID="reviews-list"
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <HeaderPanel
              bookTitle={bookTitle}
              reviews={reviews}
              goBack={navigation.goBack}
              redirectToNewReviewScreen={redirectToNewReviewScreen}
            />
          }
          bounces={false}
          style={{width: '100%'}}
          stickyHeaderHiddenOnScroll={true}
          contentContainerStyle={{flexGrow: 1}}
          ItemSeparatorComponent={() => <Box height={30} />}
          data={reviews}
          renderItem={renderItem}
        />
      </RenderIF>
    </SharedWrapperScreen>
  );
}
