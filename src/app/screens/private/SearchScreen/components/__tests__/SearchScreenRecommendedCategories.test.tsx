import React from 'react';

import {fireEvent, render, screen} from '@test';

import {
  SearchScreenRecommendedCategories,
  categories,
} from '../SearchScreenRecommendedCategories';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

afterAll(() => {
  jest.resetAllMocks();
});

function customRender() {
  render(<SearchScreenRecommendedCategories />);

  return {
    categoryItens: screen.getAllByTestId('category-item'),
    labelElement: screen.getByText('Recommended Categories'),
  };
}
describe('SearchScreenRecommendedCategories', () => {
  it('should be render component correctly', () => {
    const {categoryItens, labelElement} = customRender();

    expect(labelElement).toBeTruthy();
    expect(categoryItens.length).toEqual(categories.length);
  });

  it('should be redirect to category screen', () => {
    const {categoryItens} = customRender();

    fireEvent.press(categoryItens[0]);

    expect(mockedNavigate).toHaveBeenCalledWith('CategoryBookScreen', {
      categoryIdentify: categories[0],
      categoryTitle: categories[0],
    });
  });
});
