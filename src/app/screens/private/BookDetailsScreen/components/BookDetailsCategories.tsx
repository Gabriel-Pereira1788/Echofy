import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, ViewStyle} from 'react-native';

import {Box, Category} from '@components';

type Props = {
  categories: string[];
};

export function BookDetailsCategories({categories}: Props) {
  const categoriesToRender =
    categories.length > 3 ? categories.slice(0, 3) : categories;

  const renderItem = useCallback(({item}: ListRenderItemInfo<string>) => {
    return (
      <Category key={item} text={item} outline testID="category-book-item" />
    );
  }, []);

  return (
    <Box flexDirection="row" gap="sp10" width={'100%'} marginTop="sp20">
      <FlatList
        data={categoriesToRender}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
        contentContainerStyle={$contentContainerStyle}
      />
    </Box>
  );
}

const $contentContainerStyle: ViewStyle = {
  gap: 10,

  flexGrow: 1,
  marginTop: 20,
};
