import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Book as BookType} from '@domain';
import {useSearchHistoryStore} from '@store';

import {Book, Box, Text} from '@components';

type Props = {};

export default function SearchScreenLatestList({}: Props) {
  const searchHistory = useSearchHistoryStore();

  const renderItem = useCallback(({item}: ListRenderItemInfo<BookType>) => {
    return <Book book={item} renderTitle onPress={() => {}} />;
  }, []);

  return (
    <Box gap="sp10" width={'100%'} marginTop="sp50" flex={1}>
      <Text text="Latest Search" preset="medium/16" />

      <FlatList
        horizontal
        data={searchHistory}
        style={{flex: 1}}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={$contentContainerStyle}
      />
    </Box>
  );
}

const $contentContainerStyle: StyleProp<ViewStyle> = {
  flexGrow: 1,
  paddingHorizontal: 16,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: 15,
};
