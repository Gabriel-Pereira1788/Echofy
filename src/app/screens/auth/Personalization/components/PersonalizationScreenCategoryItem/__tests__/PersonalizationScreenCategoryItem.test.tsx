import React from 'react';

import {bookAdapter} from '@domain';
import {bookCategoryMock, fireEvent, render, screen} from '@test';

import {PersonalizationScreenCategoryItem} from '../PersonalizationScreenCategoryItem';

const allCategoriesMock = bookAdapter.toBookCategory(bookCategoryMock);
const currentCategory = allCategoriesMock[0];
const changeSelectedCategoryMock = jest.fn();
function customRenderComponent() {
  render(
    <PersonalizationScreenCategoryItem
      allCategories={allCategoriesMock}
      category={currentCategory}
      changeSelectedCategories={changeSelectedCategoryMock}
    />,
  );

  return {
    buttonCategory: screen.getByText(currentCategory.text),
  };
}

describe('PersonalizationScreenCategoryItem', () => {
  it('should be render correctly', () => {
    const {buttonCategory} = customRenderComponent();

    expect(buttonCategory).toBeTruthy();
  });

  it('should be change selection category', () => {
    const {buttonCategory} = customRenderComponent();

    fireEvent.press(buttonCategory);

    expect(changeSelectedCategoryMock).toHaveBeenCalled();
  });
});
