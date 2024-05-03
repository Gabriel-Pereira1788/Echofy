import React, {useCallback} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {Queries, Review, reviewService} from '@domain';
import {CommonStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';
import {InfinityScrollList} from '@super-components';

import {Box, ReviewCard} from '@components';

import {BookReviewPanelSkeleton} from './components/BookReviewPanelSkeleton';
import {HeaderPanel} from './components/HeaderPanel';

export function BookReviewPanel({
  route,
  navigation,
}: CommonStackProps<'BookReviewPanel'>) {
  const {bookId, bookTitle} = route.params;

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
      <InfinityScrollList
        LoadingComponent={<BookReviewPanelSkeleton />}
        queryKey={Queries.ReviewsList}
        renderItem={renderItem}
        fetchPage={page =>
          reviewService.getReviewsByBook({
            bookId: bookId,
            page,
          })
        }
        renderHeaderComponent={list => (
          <HeaderPanel
            bookTitle={bookTitle}
            reviews={list}
            goBack={navigation.goBack}
            redirectToNewReviewScreen={redirectToNewReviewScreen}
          />
        )}
        flatListProps={{
          testID: 'reviews-list',
          showsVerticalScrollIndicator: false,
          stickyHeaderHiddenOnScroll: true,
          ItemSeparatorComponent: () => <Box height={30} />,
        }}
      />
    </SharedWrapperScreen>
  );
}
