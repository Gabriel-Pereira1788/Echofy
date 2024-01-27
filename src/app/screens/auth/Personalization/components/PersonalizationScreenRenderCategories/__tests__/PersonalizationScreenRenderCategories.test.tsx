import React from 'react';

import {allCategoriesMock, fireEvent, render, screen} from '@test';

import {PersonalizationScreenRenderCategories} from '../PersonalizationScreenRenderCategories';

const changeSelectedCategoriesToMock = jest.fn();

function customRender() {
  render(
    <PersonalizationScreenRenderCategories
      allCategories={allCategoriesMock}
      categoriesToRender={allCategoriesMock}
      changeSelectedCategories={changeSelectedCategoriesToMock}
    />,
  );

  return {
    loadMoreButton: screen.getByText('load more...'),
    categoriesItem: screen.getAllByTestId('category-item'),
  };
}

describe('PersonalizationScreenRenderCategories', () => {
  it('should be render correctly', () => {
    const {loadMoreButton, categoriesItem} = customRender();
    let renderLimit = 8;

    expect(loadMoreButton).toBeTruthy();
    expect(categoriesItem.length).toEqual(renderLimit);
  });

  it('should be dispatch load more function.', () => {
    const {loadMoreButton} = customRender();
    let renderLimit = 8;

    fireEvent.press(loadMoreButton);

    const categoriesItem = screen.getAllByTestId('category-item');
    expect(loadMoreButton).toBeTruthy();
    expect(categoriesItem.length).toEqual(renderLimit + 2);
  });
});
