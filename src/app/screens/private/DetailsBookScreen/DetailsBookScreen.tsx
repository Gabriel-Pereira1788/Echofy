import React from 'react';

import {useBookFindById} from '@domain';
import {CommonStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';

import {Box, Button, Text} from '@components';

export function DetailsBookScreen({
  route,
}: CommonStackProps<'DetailsBookScreen'>) {
  const bookId = route.params.id;
  const {bookData} = useBookFindById(bookId);

  // console.log('bookData', bookData);
  async function play() {
    console.log('play');

    // await TrackPlayer.setupPlayer();

    // // Add a track to the queue
    // await TrackPlayer.add({
    //   id: 'trackId',
    //   url: 'https://www.archive.org/download/prideandprejudice_1005_librivox/prideandprejudice_01_austen_64kb.mp3',
    //   title: 'Track Title',
    //   artist: 'Track Artist',
    // });

    // await TrackPlayer.play();
  }

  return (
    <SharedWrapperScreen goBack>
      <Text text={bookData?.bookTitle ?? ''} />

      <Box
        width={'100%'}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap="sp7">
        <Button text="Play Audio" onPress={play} />
        <Button text="Read Book" type="outline" />
      </Box>
    </SharedWrapperScreen>
  );
}
