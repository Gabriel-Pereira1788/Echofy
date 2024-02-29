import React from 'react';

import {SharedWrapperScreen} from '@shared';
import TrackPlayer from 'react-native-track-player';

import {Box, Button} from '@components';

type Props = {};

export function DetailsBookScreen({}: Props) {
  async function play() {
    console.log('play');

    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: 'https://www.archive.org/download/prideandprejudice_1005_librivox/prideandprejudice_01_austen_64kb.mp3',
      title: 'Track Title',
      artist: 'Track Artist',
    });

    await TrackPlayer.play();
  }

  return (
    <SharedWrapperScreen goBack>
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
