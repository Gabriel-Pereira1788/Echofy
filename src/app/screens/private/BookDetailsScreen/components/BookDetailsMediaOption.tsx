import React from 'react';

import {Box, Button} from '@components';

type Props = {
  onPlayAudio: () => void;
  onReadBook: () => void;
};

export function BookDetailsMediaOption({onPlayAudio, onReadBook}: Props) {
  return (
    <Box
      marginVertical="sp25"
      gap="sp20"
      width={'100%'}
      flexDirection="row"
      alignItems="center"
      justifyContent="center">
      <Box flex={1}>
        <Button text="Play Audio" onPress={onPlayAudio} iconName="play" />
      </Box>
      <Box flex={1}>
        <Button
          text="Read Book"
          type="outline"
          iconName="document"
          onPress={onReadBook}
        />
      </Box>
    </Box>
  );
}
