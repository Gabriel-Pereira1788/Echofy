import React from 'react';

import {darkTheme, theme} from '@styles';
import {render, bookMock, screen, setColorSchemeMock} from '@test';

import {HomeScreenBestSellerCard} from '../HomeScreenBestSellerCard';

function customRender() {
  render(<HomeScreenBestSellerCard book={bookMock} />);

  return {
    bookImage: screen.getByTestId('book-image'),
    bookTitle: screen.getByText(bookMock.bookTitle),
  };
}

describe('HomeScreenBestSellerCard', () => {
  it('should be render component correctly', () => {
    const {bookImage, bookTitle} = customRender();

    console.log('bookTitle', bookTitle.props);
    expect(bookTitle).toBeTruthy();
    expect(bookImage).toBeTruthy();
  });

  it('should be render component in dark mode', () => {
    setColorSchemeMock('dark');

    const {bookImage, bookTitle} = customRender();

    console.log('bookTitle', bookTitle.props);

    expect(bookTitle.props.style.color).toEqual(darkTheme.colors.base);
    expect(bookImage).toBeTruthy();
  });

  it('should be render component in light mode', () => {
    setColorSchemeMock('light');
    const {bookImage, bookTitle} = customRender();

    expect(bookTitle.props.style.color).toEqual(theme.colors.base);
    expect(bookImage).toBeTruthy();
  });
});
