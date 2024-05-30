import React from 'react';
import {Animated} from 'react-native';

import {bookMock, fireEvent, render, screen} from '@test';

import {HomeScreenBookItem} from '../HomeScreenBookItem';

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
const scrollX = new Animated.Value(0);
describe('HomeScreenBookItem', () => {
  it('render component correctly', () => {
    render(<HomeScreenBookItem item={bookMock} index={0} scrollX={scrollX} />);
    const bookDescription =
      bookMock.bookDesc.length > 50
        ? bookMock.bookDesc.slice(0, 50).trim() + '...'
        : bookMock.bookDesc.trim();
    expect(screen.getByTestId('book-image')).toBeTruthy();
    expect(screen.getByText(bookMock.bookTitle)).toBeTruthy();
    expect(screen.getByText(bookMock.bookAuthor)).toBeTruthy();
    expect(screen.getByText(bookDescription)).toBeTruthy();
  });

  it('should be dispatch redirect details book screen', () => {
    render(<HomeScreenBookItem item={bookMock} index={0} scrollX={scrollX} />);

    const bookItem = screen.getByTestId('book-item');
    fireEvent.press(bookItem);
    expect(mockedNavigate).toHaveBeenCalledWith('BookDetailsScreen', {
      id: bookMock.id,
    });
  });
});
