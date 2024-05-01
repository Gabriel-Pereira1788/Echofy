import React from 'react';

import {
  bookMock,
  fireEvent,
  mockedNavigate,
  render,
  reviewsListMock,
  screen,
} from '@test';

import {BookDetailsReviews} from '../BookDetailsReviews';

function customRender() {
  render(<BookDetailsReviews bookData={bookMock} reviews={reviewsListMock} />);

  return {
    carouselText: screen.getByText('Review'),
    viewMoreButton: screen.getByText(/view more/i),
    carouselSelectors: screen.getAllByTestId('carousel-selector'),
  };
}
describe('BookDetailsReviews', () => {
  it('should be render component correctly', () => {
    const {carouselText, viewMoreButton, carouselSelectors} = customRender();

    expect(carouselText).toBeTruthy();
    expect(viewMoreButton).toBeTruthy();
    expect(carouselSelectors.length).toEqual(reviewsListMock.length);
  });

  it('should be press view more button correctly', () => {
    const {viewMoreButton} = customRender();

    fireEvent.press(viewMoreButton);

    expect(mockedNavigate).toHaveBeenCalledWith('BookReviewPanel', {
      bookId: bookMock.id,
      bookImage: bookMock.bookImage,
      bookTitle: bookMock.bookTitle,
    });
  });

  it('should be render empty component and press add review button correctly', () => {
    render(<BookDetailsReviews bookData={bookMock} reviews={[]} />);
    const addReviewButton = screen.getByText(/add review/i);
    fireEvent.press(addReviewButton);

    expect(mockedNavigate).toHaveBeenCalledWith('NewReviewScreen', {
      bookId: bookMock.id,
    });
  });
});
