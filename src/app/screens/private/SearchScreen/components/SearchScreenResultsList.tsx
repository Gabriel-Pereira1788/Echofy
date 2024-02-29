import React from 'react';

import {Book as BookType} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {useSearchHistoryActions} from '@store';

import {Book, Box, Text} from '@components';

type Props = {books: BookType[]};

export function SearchScreenResultsList({books}: Props) {
  const navigation = useNavigation();

  const {addToSearchHistory} = useSearchHistoryActions();

  function onPressBookItem(item: BookType) {
    addToSearchHistory(item);
    navigation.navigate('BookScreen', {id: item.id});
  }
  return (
    <Box gap="sp10" width={'100%'} flex={1}>
      <Text text="Search Results" preset="medium/16" />

      <Box
        flex={1}
        rowGap="sp25"
        width={'100%'}
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="space-between">
        {books &&
          books.map(book => (
            <Book
              key={book.id}
              book={book}
              renderAuthor
              renderTitle
              onPress={() => onPressBookItem(book)}
            />
          ))}
      </Box>
    </Box>
  );
}
