import React from 'react';

import {allCategoriesMock, fireEvent, render, screen} from '@test';

import {PersonalizationScreenSearch} from '../PersonalizationScreenSearch';

const changeCategoriesToRenderMock = jest.fn();

interface CustomRenderProps {
  disabled?: boolean;
}
function customRender({disabled}: CustomRenderProps) {
  render(
    <PersonalizationScreenSearch
      allCategories={allCategoriesMock}
      disabled={disabled}
      changeCategoriesToRender={changeCategoriesToRenderMock}
    />,
  );

  return {
    searchInput: screen.getByPlaceholderText('Search Categories'),
  };
}

describe('PersonalizastionScreenSearch', () => {
  it('should be render correctly', () => {
    const {searchInput} = customRender({});

    expect(searchInput).toBeTruthy();
  });

  it('should be trigger search function correctly', () => {
    const {searchInput} = customRender({});

    fireEvent.changeText(searchInput, 'B');
    const filteredCategoriesExpect = allCategoriesMock.filter(category => {
      return category.text.includes('B');
    });
    expect(searchInput).toBeTruthy();
    expect(changeCategoriesToRenderMock).toHaveBeenCalledWith(
      filteredCategoriesExpect,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('do not trigger search function if disabled statement', () => {
    const {searchInput} = customRender({disabled: true});

    fireEvent.changeText(searchInput, 'B');

    expect(searchInput).toBeTruthy();
    expect(changeCategoriesToRenderMock).not.toHaveBeenCalled();
  });
});
