import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Book as BookType} from '@domain';
import {useSearchHistoryStore} from '@store';

import {Box, Text} from '@components';

import {SearchScreenBookItem} from './SearchScreenBookItem';

type Props = {};

export default function SearchScreenLatestList({}: Props) {
  const searchHistory = useSearchHistoryStore();

  const renderItem = useCallback(({item}: ListRenderItemInfo<BookType>) => {
    return <SearchScreenBookItem item={item} />;
  }, []);

  return (
    <Box gap="sp10" width={'100%'} flex={1}>
      <Text text="Latest Search" preset="medium/16" />

      <FlatList
        testID="latest-list"
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
