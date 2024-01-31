import React, {useCallback} from 'react';
import {ListRenderItem, FlatList, StyleProp, ViewStyle} from 'react-native';

import {BookCategory, useBookCategories} from '@domain';

import {Box, Button, Text} from '@components';

type Props = {};

export function HomeScreenCategories({}: Props) {
  const {categories} = useBookCategories();
  const renderItem: ListRenderItem<BookCategory> = useCallback(
    ({item}) => (
      <Box>
        <Button type="category" text={item.text} />
      </Box>
    ),
    [],
  );
  return (
    <Box
      width={'100%'}
      alignItems="flex-start"
      marginBottom="sp10"
      justifyContent="flex-start"
      gap="sp10">
      <Box
        width={'100%'}
        flexDirection="row"
        paddingLeft="sp25"
        marginBottom="sp10">
        <Text text="Categories" preset="medium/16" color="base" />
      </Box>
      {categories && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled
          contentContainerStyle={$contentContainerStyle}
          data={categories}
          renderItem={renderItem}
        />
      )}
    </Box>
  );
}

const $contentContainerStyle: StyleProp<ViewStyle> = {
  flexGrow: 1,
  gap: 10,
  paddingHorizontal: 24,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
};
