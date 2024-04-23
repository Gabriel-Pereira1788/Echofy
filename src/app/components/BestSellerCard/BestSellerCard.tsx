import React from 'react';

import {Book as BookData} from '@domain';

import {Book} from '../Book';
import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

type Props = {
  book: BookData;
};

export function BestSellerCard({book}: Props) {
  return (
    <Box
      paddingVertical="sp10"
      paddingHorizontal="sp15"
      width={'100%'}
      height={200}
      borderRadius="rd15"
      gap="sp10"
      marginBottom="sp50"
      backgroundColor="contrast"
      flexDirection="row">
      <Box marginBottom="sp16">
        <Book book={book} size={{width: 140, height: '100%'}} />
      </Box>

      <Box
        width={'50%'}
        alignItems="flex-start"
        justifyContent="flex-start"
        gap="sp7">
        <Box>
          <Text text={book.bookTitle} color="base" preset="semiBold/16" />
        </Box>
        <Text
          text={book.bookAuthor}
          color="base"
          preset="medium/14"
          setColorsTheme={{
            dark: 'neutral5',
            light: 'neutral80',
          }}
        />

        <Text
          text={book.bookDesc.trim().slice(0, 100) + ' ...'}
          color="base"
          preset="medium/14"
          setColorsTheme={{
            dark: 'neutral40',
            light: 'neutral80',
          }}
        />
      </Box>
    </Box>
  );
}
