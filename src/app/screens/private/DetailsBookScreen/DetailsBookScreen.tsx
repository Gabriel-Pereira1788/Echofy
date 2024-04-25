import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useBookFindById} from '@domain';
import {audioTracker} from '@infra';
import {useNavigation} from '@react-navigation/native';
import {CommonStackProps} from '@router';
import {usePlayerActions} from '@services';
import {SharedWrapperScreen} from '@shared';

import {BookAttribution, Box, Carousel, Text} from '@components';

import {
  DetailsBookCategories,
  DetailsBookCover,
  DetailsBookMediaOption,
  DetailsBookSummary,
} from './components';
import {DetailsBookReviewItem} from './components/DetailsBookReviewItem';
import {toTrackData} from './functions/toTrackData';

const REVIEW =
  'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. ';

export function DetailsBookScreen({
  route,
}: CommonStackProps<'DetailsBookScreen'>) {
  const bookId = route && route.params ? route.params.id : 'testID';

  const {bookData, isLoading} = useBookFindById(bookId);

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
            onReadBook={redirectToReadBookScreen}
          />
          <DetailsBookSummary summary={bookData.bookDesc} />

          <Carousel
            text="Review"
            content={[1, 2, 3]}
            RightComponent={
              <Text text="View More" preset="medium/14" color="accent50" />
            }
            renderItem={({index}) => (
              <DetailsBookReviewItem
                key={index}
                review={REVIEW}
                starRating={3}
                user={{
                  coverUrl:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  name: 'Elena Campbell',
                }}
              />
            )}
          />
        </Box>
      )}
    </SharedWrapperScreen>
  );
}
