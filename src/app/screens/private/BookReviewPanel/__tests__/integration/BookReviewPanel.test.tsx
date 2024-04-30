import React from 'react';

import {AppStack} from '@router';
import {
  fireEvent,
  renderScreen,
  reviewsListMock,
  screen,
  sectionBooksMock,
  server,
} from '@test';

jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
  // server.resetHandlers();

  jest.useRealTimers();
  jest.resetAllMocks();
});

async function customRenderScreen() {
  renderScreen(<AppStack initialRouteName="AppTabNavigator" />);

  const bookItens = await screen.findAllByTestId('book-item');
  fireEvent.press(bookItens[0]);

  const bookData = sectionBooksMock[0].books[0];
  await screen.findByText(bookData.bookTitle);

  const viewMoreButton = screen.getByText(/view more/i);

  fireEvent.press(viewMoreButton);

  const reviewListElement = await screen.findByTestId('reviews-list');
  return {
    reviewListElement,
    bookTitleElement: screen.findByText(bookData.bookTitle),
    goBackElement: screen.getByTestId('go-back-element'),
    newReviewScreenButton: screen.getByTestId('new-review-screen-button'),
    voteRatingElements: screen.getAllByTestId('vote-rating-item'),
  };
}
describe('BookReviewPanel', () => {
  it('should be render component correctly', async () => {
    const {
      bookTitleElement,
      reviewListElement,
      goBackElement,
      newReviewScreenButton,
      voteRatingElements,
    } = await customRenderScreen();

    expect(goBackElement).toBeTruthy();
    expect(newReviewScreenButton).toBeTruthy();
    expect(voteRatingElements.length > 0).toBeTruthy();
    expect(bookTitleElement).toBeTruthy();
    expect(reviewListElement.props.data.length).toEqual(reviewsListMock.length);
  });
});
