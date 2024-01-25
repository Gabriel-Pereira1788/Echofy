import React from 'react';

import {Box} from '@components';

export function SharedWrapperScreen({children}: React.PropsWithChildren) {
  return (
    <Box
      width={'100%'}
      flex={1}
      padding="sp25"
      height={'100%'}
      alignItems="center"
      backgroundColor="white"
      justifyContent="center">
      {children}
    </Box>
  );
}
