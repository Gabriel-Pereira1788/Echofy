import React from 'react';

import {Book as BookType} from '@domain';
import {useSearchHistoryActions} from '@store';

import {Box, Text} from '@components';

import {SearchScreenBookItem} from './SearchScreenBookItem';

type Props = {books: BookType[]};

export function SearchScreenResultsList({books}: Props) {
  const {addToSearchHistory} = useSearchHistoryActions();

  return (
    <Box gap="sp10" width={'100%'} flex={1}>
      <Text text="Search Results" preset="medium/16" />

      <Box
        flex={1}
        rowGap="sp25"
        width={'100%'}
        flexWrap="wrap"
        flexDirection="row"
        testID="results-list"
        justifyContent="space-between">
        {books &&
          books.map(book => (
            <SearchScreenBookItem
              key={book.id}
              item={book}
              onPress={() => addToSearchHistory(book)}
            />
          ))}
      </Box>
    </Box>
  );
}
