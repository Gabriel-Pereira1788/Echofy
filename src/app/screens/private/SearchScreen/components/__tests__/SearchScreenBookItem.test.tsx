import React from 'react';

import {bookMock, fireEvent, render, screen} from '@test';

import {SearchScreenBookItem} from '../SearchScreenBookItem';

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
function customRender({onPress}: {onPress?: () => void}) {
  render(<SearchScreenBookItem item={bookMock} onPress={onPress} />);

  return {
    bookElement: screen.getByTestId('book-item'),
    titleElement: screen.getByText(bookMock.bookTitle),
  };
}
describe('SearchScreenBookItem', () => {
  it('should be render component correctly', () => {
    const {bookElement, titleElement} = customRender({});

    expect(bookElement).toBeTruthy();
    expect(titleElement).toBeTruthy();
  });

  it('should be redirect to book screen', () => {
    const {bookElement} = customRender({});

    fireEvent.press(bookElement);
    expect(mockedNavigate).toHaveBeenCalledWith('BookDetailsScreen', {
      id: bookMock.id,
    });
  });

  it('dispatch new press function correctly', () => {
    const mockOnPress = jest.fn();
    const {bookElement} = customRender({onPress: mockOnPress});

    fireEvent.press(bookElement);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
