import React from 'react';

import {Book as BookData} from '@domain';

import {Book, Box, Text} from '@components';

type Props = {
  book: BookData;
};

export function HomeScreenBestSellerCard({book}: Props) {
  return (
    <Box
      padding="sp15"
      width={'100%'}
      height={200}
      borderRadius="rd15"
      gap="sp10"
      marginBottom="sp50"
      backgroundColor="contrast"
      flexDirection="row">
      <Box width={140} height={'100%'}>
        <Book book={book} />
      </Box>

      <Box
        width={'100%'}
        alignItems="flex-start"
        marginTop="sp7"
        justifyContent="flex-start"
        gap="sp7">
        <Box width="auto">
          <Text text={book.bookTitle} color="base" preset="semiBold/16" />
        </Box>
        <Text
          text={'Light Mage'}
          color="base"
          preset="medium/14"
          setColorsTheme={{
            dark: 'neutral5',
            light: 'neutral80',
          }}
        />
      </Box>
    </Box>
  );
}
