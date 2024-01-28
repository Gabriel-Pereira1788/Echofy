import React from 'react';

import {Box, Text} from '@components';

interface SharedAuthLayoutProps extends React.PropsWithChildren {
  title: string;
}

export function SharedAuthLayout({title, children}: SharedAuthLayoutProps) {
  return (
    <Box
      width={'100%'}
      flex={1}
      padding="sp20"
      height={'100%'}
      alignItems="center"
      backgroundColor="bgMain"
      justifyContent="center">
      <Box marginBottom="sp20" alignSelf="flex-start">
        <Text text={title} preset="semiBold/16" />
      </Box>

      {children}
    </Box>
  );
}
