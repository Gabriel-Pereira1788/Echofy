import React, {useCallback, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {BookCategory} from '@domain';

import {Box, Text, TouchableOpacityBox} from '@components';

import {PersonalizationScreenCategoryItem} from '../PersonalizationScreenCategoryItem/PersonalizationScreenCategoryItem';

type Props = {
  categoriesToRender: BookCategory[];
  allCategories: BookCategory[];
  changeSelectedCategories: (newCategories: BookCategory[]) => void;
};

export function PersonalizationScreenRenderCategories({
  categoriesToRender,
  allCategories,
  changeSelectedCategories,
}: Props) {
  const [renderLimit, setRenderLimit] = useState(8);

  const dataCategories = filterCategories(categoriesToRender);
  const renderItem: ListRenderItem<BookCategory> = useCallback(
    ({item}) => {
      return (
        <PersonalizationScreenCategoryItem
          category={item}
          allCategories={allCategories}
          changeSelectedCategories={changeSelectedCategories}
        />
      );
    },
    [allCategories, changeSelectedCategories],
  );

  function onLoadMore() {
    setRenderLimit(prev => prev + 2);
  }
  return (
    <FlatList
      data={dataCategories.filter((_, index) => index < renderLimit)}
      numColumns={2}
      initialNumToRender={6}
      maxToRenderPerBatch={3}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      scrollEnabled={false}
      ItemSeparatorComponent={() => <Box height={10} />}
      ListFooterComponent={
        <TouchableOpacityBox
          boxProps={{alignSelf: 'flex-end'}}
          onPress={onLoadMore}>
          <Text text="load more..." color="accent50" />
        </TouchableOpacityBox>
      }
    />
  );
}

function filterCategories(categories: BookCategory[]) {
  const priorityCategories = categories.sort((a, b) => {
    return a.isSelected === b.isSelected ? 0 : a.isSelected ? -1 : 1;
  });
  return priorityCategories;
}
