import React from 'react';

import {bookMock, fireEvent, render, screen} from '@test';

import {SearchScreenResultsList} from '../SearchScreenResultsList';

const mockBooks = [bookMock, bookMock, bookMock];
function customRender() {
  render(<SearchScreenResultsList books={mockBooks} />);

  return {
    labelElement: screen.getByText('Search Results'),
    bookItens: screen.getAllByTestId('book-item'),
  };
}

const mockAddToSearchHistory = jest.fn();
jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    useSearchHistoryActions: () => ({
      addToSearchHistory: mockAddToSearchHistory,
    }),
  };
});
describe('SearchScreenResultsList', () => {
  it('should be render component correctly', () => {
    const {labelElement, bookItens} = customRender();

    expect(labelElement).toBeTruthy();
    expect(bookItens.length).toEqual(mockBooks.length);
  });

  test('dispatch add to search history function correctly', () => {
    const {bookItens} = customRender();

    fireEvent.press(bookItens[0]);
    expect(mockAddToSearchHistory).toHaveBeenCalledWith(mockBooks[0]);
  });
});
