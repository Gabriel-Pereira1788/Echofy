import React from 'react';
import {ScrollView} from 'react-native';

import {Box, Image} from '@components';

export function SharedPublicLayout({children}: React.PropsWithChildren) {
  return (
    <Box width={'100%'} flex={1} height={'100%'} backgroundColor="bgMain">
      <ScrollView style={{flex: 1}} nestedScrollEnabled>
        <Box position="relative" width={'100%'} alignItems="flex-end">
          <Image imageName="ellipseRound" />
        </Box>
        <Box
          flex={1}
          alignItems="center"
          justifyContent="center"
          padding="sp25"
          paddingTop="sp3">
          {children}
        </Box>
      </ScrollView>
    </Box>
  );
}
