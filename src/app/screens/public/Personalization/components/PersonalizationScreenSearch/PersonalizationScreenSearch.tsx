import React from 'react';

import {BookCategory} from '@domain';

import {Input} from '@components';

type Props = {
  disabled?: boolean;
  allCategories: BookCategory[] | undefined;
  categoriesToRender: BookCategory[];
  changeCategoriesToRender: (newCategoriesToRender: BookCategory[]) => void;
};

export function PersonalizationScreenSearch({
  allCategories,
  categoriesToRender,
  changeCategoriesToRender,
  disabled,
}: Props) {
  function onSearchCategories(textMatch: string) {
    if (disabled) {
      return;
    }
    const matchCategories = textMatch.trim()
      ? categoriesToRender?.filter(category =>
          category.text.includes(textMatch),
        )
      : allCategories!;

    changeCategoriesToRender(matchCategories);
  }

  return (
    <Input
      disabled={disabled}
      placeholder="Search Categories"
      onChangeText={onSearchCategories}
    />
  );
}
