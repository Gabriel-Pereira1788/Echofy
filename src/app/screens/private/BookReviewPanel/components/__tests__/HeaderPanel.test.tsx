import React from 'react';

import {bookMock, fireEvent, render, reviewsListMock, screen} from '@test';

import {makeVoteAverage} from '../../functions/makeVoteAverage';
import {HeaderPanel} from '../HeaderPanel';

const bookTitle = bookMock.bookTitle;

const goBack = jest.fn();
const redirectToNewReviewScreen = jest.fn();

function customRender() {
  render(
    <HeaderPanel
      reviews={reviewsListMock}
      bookTitle={bookTitle}
      goBack={goBack}
      redirectToNewReviewScreen={redirectToNewReviewScreen}
    />,
  );

  const voteAverage = makeVoteAverage(reviewsListMock);
  return {
    bookTitleElement: screen.findByText(bookTitle),
    goBackElement: screen.getByTestId('go-back-element'),
    newReviewScreenButton: screen.getByTestId('new-review-screen-button'),
    voteAverageElement: screen.getByText(voteAverage),
    voteRatingElements: screen.getAllByTestId('vote-rating-item'),
  };
}

describe('HeaderPanel', () => {
  it('should be render component correctly', () => {
    const {
      bookTitleElement,
      goBackElement,
      newReviewScreenButton,
      voteAverageElement,
      voteRatingElements,
    } = customRender();

    expect(voteAverageElement).toBeTruthy();
    expect(bookTitleElement).toBeTruthy();
    expect(goBackElement).toBeTruthy();
    expect(newReviewScreenButton).toBeTruthy();
    expect(voteRatingElements.length > 0).toBeTruthy();
  });

  it('should be press go back button', () => {
    const {goBackElement} = customRender();
    fireEvent.press(goBackElement);

    expect(goBack).toHaveBeenCalled();
  });

  it('should be press redirect to new review screen button', () => {
    const {newReviewScreenButton} = customRender();
    fireEvent.press(newReviewScreenButton);

    expect(redirectToNewReviewScreen).toHaveBeenCalled();
  });
});
