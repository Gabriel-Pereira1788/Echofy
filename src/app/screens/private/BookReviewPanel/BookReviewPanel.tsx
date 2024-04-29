import React from 'react';
import {FlatList} from 'react-native';

import {useReviewsList} from '@domain';
import {CommonStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';

import {Box, ReviewCard} from '@components';

import {HeaderPanel} from './components/HeaderPanel';

export function BookReviewPanel({route}: CommonStackProps<'BookReviewPanel'>) {
  const {bookId, bookImage, bookTitle} = route.params;

  const {reviews} = useReviewsList(bookId);
  return (
    <SharedWrapperScreen customPadding>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <HeaderPanel
            bookImage={bookImage}
            bookTitle={bookTitle}
            reviews={reviews}
          />
        }
        bounces={false}
        style={{width: '100%'}}
        stickyHeaderHiddenOnScroll={true}
        ItemSeparatorComponent={() => <Box height={30} />}
        data={reviews}
        renderItem={({item, index}) => <ReviewCard key={index} review={item} />}
      />
    </SharedWrapperScreen>
  );
}
