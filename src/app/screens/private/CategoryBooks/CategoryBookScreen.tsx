import React, {useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  ViewStyle,
} from 'react-native';

import {Book as BookType, useGetBookListByCategory} from '@domain';
import {HomeStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';

import {Book, Box, TouchableOpacityBox} from '@components';

export function CategoryBookScreen({
  route,
}: HomeStackProps<'CategoryBookScreen'>) {
  const categoryIdentify = route.params.categoryIdentify;
  const categoryTitle = route.params.categoryTitle;

  const {list, getMore, loadingNextPage} =
    useGetBookListByCategory(categoryIdentify);

  const renderItem = useCallback(({item}: ListRenderItemInfo<BookType>) => {
    return (
      <TouchableOpacityBox style={{flex: 1}}>
        <Book
          book={item}
          renderAuthor
          renderTitle
          boxImageSize={{height: 200}}
        />
      </TouchableOpacityBox>
    );
  }, []);

  function handleOnEndReached() {
    getMore();
  }

  return (
    <SharedWrapperScreen headerTitle={categoryTitle} customPadding>
      <Box flex={1} width={'100%'} padding="sp10">
        <FlatList
          data={list}
          style={$flatListStyle}
          numColumns={2}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={$columnWrapperStyle}
          contentContainerStyle={$contentContainerStyle}
          onEndReached={handleOnEndReached}
          onEndReachedThreshold={0.3}
          ListFooterComponent={
            loadingNextPage ? (
              <Box>
                <ActivityIndicator size={20} />
              </Box>
            ) : undefined
          }
        />
      </Box>
    </SharedWrapperScreen>
  );
}

const $flatListStyle: ViewStyle = {
  width: '100%',
  flex: 1,
};

const $contentContainerStyle: ViewStyle = {
  gap: 20,
  flexGrow: 1,
  paddingBottom: 50,
};

const $columnWrapperStyle: ViewStyle = {
  gap: 20,
};
