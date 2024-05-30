import React from 'react';

import {bookMock, fireEvent, render, screen} from '@test';

import SearchScreenLatestList from '../SearchScreenLatestList';

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

const mockedBooks = [bookMock, bookMock, bookMock];
jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {...originalModule, useSearchHistoryStore: () => mockedBooks};
});
function customRender() {
  render(<SearchScreenLatestList />);

  return {
    labelElement: screen.getByText('Latest Search'),
    flatlistElement: screen.getByTestId('latest-list'),
    bookItens: screen.getAllByTestId('book-item'),
  };
}

describe('SearchScreenLatestList', () => {
  it('should be render component correctly', () => {
    const {labelElement, flatlistElement} = customRender();

    expect(labelElement).toBeTruthy();
    expect(flatlistElement).toBeTruthy();
    expect(flatlistElement.props.data.length).toEqual(mockedBooks.length);
  });

  it('should be redirect to book screen', () => {
    const {bookItens} = customRender();

    fireEvent.press(bookItens[0]);

    expect(mockedNavigate).toHaveBeenCalledWith('BookDetailsScreen', {
      id: bookMock.id,
    });
  });
});
