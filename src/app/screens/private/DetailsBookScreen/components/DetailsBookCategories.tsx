import React from 'react';

import {Box, Category} from '@components';

type Props = {
  categories: string[];
};

export function DetailsBookCategories({categories}: Props) {
  const categoriesToRender =
    categories.length > 3 ? categories.slice(0, 3) : categories;

  return (
    <Box flexDirection="row" gap="sp10" width={'100%'} marginTop="sp20">
      {categoriesToRender.map(category => (
        <Category
          key={category}
          text={category}
          outline
          testID="category-book-item"
        />
      ))}
    </Box>
  );
}
