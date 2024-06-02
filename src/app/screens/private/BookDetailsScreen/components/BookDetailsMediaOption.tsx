import React from 'react';

import {Box, Button} from '@components';

type Props = {
  onPlayAudio: () => void;
};

export function BookDetailsMediaOption({onPlayAudio}: Props) {
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
    </Box>
  );
}
