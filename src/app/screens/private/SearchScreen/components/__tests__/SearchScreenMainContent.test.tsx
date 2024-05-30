import React from 'react';

import {bookMock, render, screen} from '@test';

import {
  SearchScreenMainContent,
  SearchScreenMainContentProps,
} from '../SearchScreenMainContent';

const bookListMock = [bookMock];

function customRender(
  props?: Partial<Omit<SearchScreenMainContentProps, 'list'>>,
) {
  render(
    <SearchScreenMainContent
      list={bookListMock}
      isLoading={props?.isLoading ?? false}
      loadingNextPage={props?.loadingNextPage ?? false}
      renderSearchHistory={props?.renderSearchHistory ?? false}
    />,
  );
}
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});
describe('SearchScreenMainContent', () => {
  it('render component correctly', () => {
    customRender();

    const bookItens = screen.getAllByTestId('book-item');

    expect(bookItens.length).toEqual(bookListMock.length);
  });

  it('should be render skeleton list', () => {
    customRender({isLoading: true});

    const bookSkeletonItens = screen.getAllByTestId('book-skeleton-item');

    expect(bookSkeletonItens.length).toEqual(8);
  });

  it('should be render loading next page component', () => {
    customRender({loadingNextPage: true});

    const loadingNextPageElement = screen.getByTestId('loading-next-page');

    expect(loadingNextPageElement).toBeTruthy();
  });

  it('should be render search history correctly', () => {
    customRender({renderSearchHistory: true});

    const searchHistoryList = screen.getByTestId('latest-list');
    const categoriesItens = screen.getAllByTestId('category-item');
    expect(searchHistoryList).toBeTruthy();
    expect(categoriesItens.length > 0).toBeTruthy();
  });
});
