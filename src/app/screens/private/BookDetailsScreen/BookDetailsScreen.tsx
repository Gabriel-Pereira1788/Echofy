import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useBookFindById, useReviewsList} from '@domain';
import {audioTracker} from '@infra';
import {useNavigation} from '@react-navigation/native';
import {CommonStackProps} from '@router';
import {usePlayerActions} from '@services';
import {SharedWrapperScreen} from '@shared';

import {BookAttribution, Box} from '@components';

import {
  BookDetailsCategories,
  BookDetailsCover,
  BookDetailsMediaOption,
  BookDetailsReviews,
  BookDetailsSummary,
} from './components';
import {toTrackData} from './functions/toTrackData';

export function BookDetailsScreen({
  route,
}: CommonStackProps<'BookDetailsScreen'>) {
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

  return (
    <SharedWrapperScreen goBack headerTitle={bookData?.bookTitle} scrollEnabled>
      {isLoading && !bookData && <ActivityIndicator size={20} />}

      <Box flex={1} width={'100%'} alignItems="center" justifyContent="center">
        {bookData && (
          <>
            <BookDetailsCover coverURI={bookData.bookImage} />
            <BookAttribution
              author={bookData?.bookAuthor ?? ''}
              title={bookData?.bookTitle ?? ''}
            />
            <BookDetailsCategories categories={bookData.bookGenres ?? []} />
            <BookDetailsMediaOption
              onPlayAudio={onPlayAudio}
              onReadBook={redirectToReadBookScreen}
            />
            <BookDetailsSummary summary={bookData.bookDesc} />
          </>
        )}
        {reviews && bookData && (
          <BookDetailsReviews bookData={bookData} reviews={reviews} />
        )}
      </Box>
    </SharedWrapperScreen>
  );
}
