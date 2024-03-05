import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useBookFindById} from '@domain';
import {CommonStackProps} from '@router';
import {usePlayerActions, useTrackPlayerController} from '@services';
import {SharedWrapperScreen} from '@shared';

import {Box} from '@components';

import {
  DetailsBookAttribution,
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

  const trackPlayer = useTrackPlayerController();

  async function onPlayAudio() {
    if (bookData) {
      const tracks = toTrackData(bookData);

      await trackPlayer.initialize(tracks);
      await trackPlayer.play();

      playerActions.show({
        title: bookData.bookTitle,
        author: bookData.bookAuthor,
        coverURI: bookData.bookImage,
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
          <DetailsBookCover imageUrl={bookData.bookImage} />
          <DetailsBookAttribution
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
