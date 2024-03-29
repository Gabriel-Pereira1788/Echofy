import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useBookFindById} from '@domain';
import {audioTracker} from '@infra';
import {CommonStackProps} from '@router';
import {usePlayerActions} from '@services';
import {SharedWrapperScreen} from '@shared';

import {BookAttribution, Box} from '@components';

import {
  DetailsBookCategories,
  DetailsBookCover,
  DetailsBookMediaOption,
  DetailsBookSummary,
} from './components';
import {toTrackData} from './functions/toTrackData';

export function DetailsBookScreen({
  route,
}: CommonStackProps<'DetailsBookScreen'>) {
  const bookId = route && route.params ? route.params.id : 'testID';
  const {bookData, isLoading} = useBookFindById(bookId);

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

  const bookTitle = bookData
    ? bookData.bookTitle.length > 30
      ? bookData.bookTitle.slice(0, 30) + '...'
      : bookData.bookTitle
    : '';

  return (
    <SharedWrapperScreen goBack headerTitle={bookTitle} scrollEnabled>
      {isLoading && !bookData && <ActivityIndicator size={20} />}

      {bookData && (
        <Box
          flex={1}
          width={'100%'}
          alignItems="center"
          justifyContent="center">
          <DetailsBookCover coverURI={bookData.bookImage} />
          <BookAttribution
            author={bookData?.bookAuthor ?? ''}
            title={bookData?.bookTitle ?? ''}
          />
          <DetailsBookCategories categories={bookData.bookGenres ?? []} />
          <DetailsBookMediaOption
            onPlayAudio={onPlayAudio}
            onReadBook={() => {}}
          />
          <DetailsBookSummary summary={bookData.bookDesc} />
        </Box>
      )}
    </SharedWrapperScreen>
  );
}
