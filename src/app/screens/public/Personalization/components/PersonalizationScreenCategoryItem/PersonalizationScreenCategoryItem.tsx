import React from 'react';

import {BookCategory} from '@domain';

import {Box, Button} from '@components';

type Props = {
  category: BookCategory;
  categories: BookCategory[];
  changeCategoriesToRender: (newCategories: BookCategory[]) => void;
};

export function PersonalizationScreenCategoryItem({
  category,
  categories,
  changeCategoriesToRender,
}: Props) {
  function selectCategory() {
    const newSelectedCategories = categories.map(_category => {
      if (_category.text === category.text) {
        return {
          text: _category.text,
          isSelected: true,
        };
      }

      return _category;
    });
    changeCategoriesToRender(newSelectedCategories);
  }

  function unSelectCategory() {
    const newSelectedCategories = categories.map(_category => {
      if (_category.text === category.text) {
        return {
          text: _category.text,
          isSelected: false,
        };
      }

      return _category;
    });
    changeCategoriesToRender(newSelectedCategories);
  }
  return (
    <Box alignItems="center" justifyContent="center" marginHorizontal="sp3">
      <Button
        text={category.text}
        type={category.isSelected ? 'selected' : 'category'}
        onPress={() =>
          category.isSelected ? unSelectCategory() : selectCategory()
        }
      />
    </Box>
  );
}
