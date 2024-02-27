import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, ViewStyle} from 'react-native';

import {Book as BookType} from '@domain';

import {Book, Box, Text} from '@components';

type Props = {books: BookType[]; onEndReached: () => void};

export function SearchScreenResultsList({books, onEndReached}: Props) {
  const renderItem = useCallback(({item}: ListRenderItemInfo<BookType>) => {
    return <Book book={item} renderTitle renderAuthor />;
  }, []);
  return (
    <Box gap="sp10" width={'100%'} flex={1}>
      <Text text="Search Results" preset="medium/16" />

      <FlatList
        numColumns={2}
        data={books}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onScroll={() => {
          console.log('scrolled');
        }}
        onEndReachedThreshold={0.3}
        columnWrapperStyle={$columnWrapperStyle}
        contentContainerStyle={$contentContainerStyle}
      />
    </Box>
  );
}

const $contentContainerStyle: ViewStyle = {
  gap: 20,
  width: '100%',
  flexGrow: 1,
};
const $columnWrapperStyle: ViewStyle = {
  justifyContent: 'space-between',
};
