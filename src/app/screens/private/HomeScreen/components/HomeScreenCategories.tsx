import React, {useCallback} from 'react';
import {ListRenderItem, FlatList, StyleProp, ViewStyle} from 'react-native';

import {BookCategory, useBookCategories} from '@domain';

import {Box, Category, Text} from '@components';

type Props = {};

export function HomeScreenCategories({}: Props) {
  const {categories} = useBookCategories();
  const renderItem: ListRenderItem<BookCategory> = useCallback(
    ({item}) => (
      <Box>
        <Category text={item.text} />
      </Box>
    ),
    [],
  );
  return (
    <Box
      width={'100%'}
      alignItems="flex-start"
      marginBottom="sp25"
      justifyContent="flex-start"
      gap="sp10">
      <Box
        width={'100%'}
        flexDirection="row"
        marginBottom="sp10"
        paddingLeft="sp25">
        <Text text="Categories" preset="medium/16" color="base" />
      </Box>
      {categories && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled
          contentContainerStyle={$contentContainerStyle}
          data={categories.splice(0, 10)}
          renderItem={renderItem}
        />
      )}
    </Box>
  );
}

const $contentContainerStyle: StyleProp<ViewStyle> = {
  flexGrow: 1,
  gap: 10,
  paddingHorizontal: 16,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
};
