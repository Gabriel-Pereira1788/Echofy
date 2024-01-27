import React from 'react';

import {BookCategory} from '@domain';

import {Box, Button} from '@components';

type Props = {
  category: BookCategory;
  allCategories: BookCategory[];
  changeSelectedCategories: (newCategories: BookCategory[]) => void;
};

export function PersonalizationScreenCategoryItem({
  category,
  allCategories,
  changeSelectedCategories,
}: Props) {
  const selectCategory = () => handleSelectCategory(true);

  const unSelectCategory = () => handleSelectCategory(false);

  function handleSelectCategory(isSelected: boolean) {
    const newSelectedCategories = allCategories.map(_category => {
      if (_category.text === category.text) {
        return {
          text: _category.text,
          isSelected,
        };
      }

      return _category;
    });
    changeSelectedCategories(newSelectedCategories);
  }
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      marginHorizontal="sp3"
      testID="category-item">
      <Button
        testID="category-item-button"
        text={category.text}
        type={category.isSelected ? 'selected' : 'category'}
        onPress={() =>
          category.isSelected ? unSelectCategory() : selectCategory()
        }
      />
    </Box>
  );
}
