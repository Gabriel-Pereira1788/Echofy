import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useBookFindById, useReviewsList} from '@domain';
import {audioTracker} from '@infra';
import {useNavigation} from '@react-navigation/native';
import {CommonStackProps} from '@router';
import {usePlayerActions} from '@services';
import {SharedWrapperScreen} from '@shared';

import {
  BookAttribution,
  Box,
  Carousel,
  Text,
  TouchableOpacityBox,
} from '@components';

import {
  DetailsBookCategories,
  DetailsBookCover,
  DetailsBookMediaOption,
  DetailsBookSummary,
} from './components';
import {DetailsBookReviewItem} from './components/DetailsBookReviewItem';
import {toTrackData} from './functions/toTrackData';

export function DetailsBookScreen({
  route,
}: CommonStackProps<'DetailsBookScreen'>) {
  const bookId = route && route.params ? route.params.id : 'testID';

  const {bookData, isLoading} = useBookFindById(bookId);
  const {reviews} = useReviewsList(bookId, 4);

  const navigation = useNavigation();
  const playerActions = usePlayerActions();

  async function onPlayAudio() {
    if (bookData) {
      const tracks = toTrackData(bookData);

      await audioTracker.reset();
      await audioTracker.addTracks(tracks);
      await audioTracker.play();

      playerActions.show({
        title: bookData.bookTitle,
        author: bookData.bookAuthor,
        coverURI: bookData.bookImage,
        currentStatus: 'play',
      });
    }
  }

  function redirectToReadBookScreen() {
    if (bookData) {
      navigation.navigate('ReadBookScreen', {
        bookId: bookData.id,
        readLink: bookData.bookReadLink,
        bookTitle: bookData.bookTitle,
      });
    }
  }

  function redirectToBookReviewPanel() {
    if (bookData) {
      navigation.navigate('BookReviewPanel', {bookId: bookData.id});
    }
  }

  const bookTitle = bookData
    ? bookData.bookTitle.length > 30
      ? bookData.bookTitle.slice(0, 30) + '...'
      : bookData.bookTitle
    : '';

  return (
    <SharedWrapperScreen goBack headerTitle={bookTitle} scrollEnabled>
      {isLoading && !bookData && <ActivityIndicator size={20} />}

      <Box flex={1} width={'100%'} alignItems="center" justifyContent="center">
        {bookData && (
          <>
            <DetailsBookCover coverURI={bookData.bookImage} />
            <BookAttribution
              author={bookData?.bookAuthor ?? ''}
              title={bookData?.bookTitle ?? ''}
            />
            <DetailsBookCategories categories={bookData.bookGenres ?? []} />
            <DetailsBookMediaOption
              onPlayAudio={onPlayAudio}
              onReadBook={redirectToReadBookScreen}
            />
            <DetailsBookSummary summary={bookData.bookDesc} />
          </>
        )}
        {reviews && reviews.length > 0 && (
          <Carousel
            text="Review"
            content={reviews}
            RightComponent={
              <TouchableOpacityBox onPress={redirectToBookReviewPanel}>
                <Text text="View More" preset="medium/14" color="accent50" />
              </TouchableOpacityBox>
            }
            renderItem={({item}) => (
              <DetailsBookReviewItem key={item.id} review={item} />
            )}
          />
        )}
      </Box>
    </SharedWrapperScreen>
  );
}
