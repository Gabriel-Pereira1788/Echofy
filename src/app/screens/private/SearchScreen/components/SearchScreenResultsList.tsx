import React from 'react';

import {Book as BookType} from '@domain';

import {Book, Box, Text} from '@components';

type Props = {books: BookType[]; onEndReached: () => void};

export function SearchScreenResultsList({books}: Props) {
  return (
    <Box gap="sp10" width={'100%'} flex={1}>
      <Text text="Search Results" preset="medium/16" />

      <Box
        width={'100%'}
        flexWrap="wrap"
        flex={1}
        flexDirection="row"
        justifyContent="space-between"
        rowGap="sp25">
        {books &&
          books.map(book => (
            <Book key={book.id} book={book} renderAuthor renderTitle />
          ))}
      </Box>
    </Box>
  );
}
