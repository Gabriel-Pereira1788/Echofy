import React from 'react';

import {bookMock, fireEvent, mockedNavigate, render} from '@test';

import {CategoryBookItem} from '../CategoryBookItem';

describe('CategoryBookItem', () => {
  it('should render component correctly', () => {
    const {getByTestId} = render(<CategoryBookItem book={bookMock} />);

    expect(getByTestId('category-book-item')).toBeTruthy();
  });

  it('should be redirect to book screen ', () => {
    const {getByTestId} = render(<CategoryBookItem book={bookMock} />);
    const categoryBookElement = getByTestId('category-book-item');

    fireEvent.press(categoryBookElement);
    expect(mockedNavigate).toHaveBeenCalledWith('BookDetailsScreen', {
      id: bookMock.id,
    });
  });
});
