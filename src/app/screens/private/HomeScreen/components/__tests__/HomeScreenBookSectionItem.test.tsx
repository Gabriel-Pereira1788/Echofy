import React from 'react';

import {bookMock, fireEvent, mockedNavigate, render, screen} from '@test';

import {HomeScreenBookSectionProps} from '../HomeScreenBookSection';
import {HomeScreenBookSectionItem} from '../HomeScreenBookSectionItem';

type Props = {
  sectionIdentify?: HomeScreenBookSectionProps['sectionIdentify'];
};
export function customRender({sectionIdentify}: Props) {
  render(
    <HomeScreenBookSectionItem
      book={bookMock}
      sectionIdentify={sectionIdentify ? sectionIdentify : 'adventure'}
    />,
  );

  return {
    bookImageElement: screen.getByTestId('book-image'),
    bookTitleElement: screen.queryByText(bookMock.bookTitle),
  };
}

describe('HomeScreenBookSectionItem', () => {
  it('should be render component correctly', () => {
    const {bookImageElement, bookTitleElement} = customRender({});

    expect(bookImageElement).toBeTruthy();
    expect(bookTitleElement).toBeTruthy();
    expect(bookImageElement.props.source.uri).toEqual(bookMock.bookImage);
  });

  it('should be not render title book', () => {
    const {bookTitleElement} = customRender({
      sectionIdentify: 'recommended-for-you',
    });
    expect(bookTitleElement).not.toBeTruthy();
  });

  it('should render best seller card', () => {
    const {bookTitleElement, bookImageElement} = customRender({
      sectionIdentify: 'best-seller',
    });

    const bestSellerCardElement = screen.getByTestId('best-seller-card');

    fireEvent.press(bestSellerCardElement);
    expect(mockedNavigate).toHaveBeenCalledWith('BookScreen', {
      id: bookMock.id,
    });
    expect(bestSellerCardElement).toBeTruthy();
    expect(bookTitleElement).toBeTruthy();
    expect(bookImageElement).toBeTruthy();
  });

  it('should be redirect to book screen', () => {
    customRender({
      sectionIdentify: 'adventure',
    });

    const bookItem = screen.getByTestId('book-item');

    fireEvent.press(bookItem);
    expect(mockedNavigate).toHaveBeenCalledWith('BookScreen', {
      id: bookMock.id,
    });
  });
});
