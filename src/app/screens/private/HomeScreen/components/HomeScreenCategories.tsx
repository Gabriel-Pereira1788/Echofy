import React, {useCallback} from 'react';
import {ListRenderItem, FlatList, StyleProp, ViewStyle} from 'react-native';

import {BookCategory, useBookCategories} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Category, Text} from '@components';

type Props = {};

export function HomeScreenCategories({}: Props) {
  const {categories} = useBookCategories();

  const navigation = useNavigation();

  const renderItem: ListRenderItem<BookCategory> = useCallback(
    ({item}) => {
      function redirectToCategoryBooksScreen() {
        navigation.navigate('CategoryBookScreen', {
          categoryIdentify: item.text,
        });
      }
      return (
        <Box>
          <Category
            testID="category"
            text={item.text}
            onPress={redirectToCategoryBooksScreen}
          />
        </Box>
      );
    },
    [navigation],
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
