import React from 'react';

import {CategoryIdentify} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Category, Text} from '@components';

type Props = {};

export const categories: CategoryIdentify[] = [
  'adventure',
  'fantasy',
  'fiction',
  'mystery',
];

export function SearchScreenRecommendedCategories({}: Props) {
  const navigation = useNavigation();

  function redirectToCategoryScreen(category: CategoryIdentify) {
    navigation.navigate('CategoryBookScreen', {
      categoryIdentify: category,
      categoryTitle: category,
    });
  }
  return (
    <Box width={'100%'} gap="sp15" marginTop="sp20" flexWrap="wrap">
      <Text text="Recommended Categories" preset="medium/16" />
      <Box
        justifyContent="space-between"
        flexDirection="row"
        rowGap="sp3"
        flexWrap="wrap">
        {categories &&
          categories.map(category => (
            <Box minWidth="48%" key={category}>
              <Category
                testID="category-item"
                text={category}
                onPress={() => redirectToCategoryScreen(category)}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
}
