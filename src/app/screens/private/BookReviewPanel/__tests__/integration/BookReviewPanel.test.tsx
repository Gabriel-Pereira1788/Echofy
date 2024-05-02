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

  const bookTitleElement = await screen.findByText(bookData.bookTitle);
  return {
    bookTitleElement: bookTitleElement,
    goBackElement: screen.getByTestId('go-back-element'),
    newReviewScreenButton: screen.getByTestId('new-review-screen-button'),
    voteRatingElements: screen.getAllByTestId('vote-rating-item'),
  };
}
describe('BookReviewPanel', () => {
  it('should be render component correctly', async () => {
    const {
      bookTitleElement,
      goBackElement,
      newReviewScreenButton,
      voteRatingElements,
    } = await customRenderScreen();

    expect(goBackElement).toBeTruthy();
    expect(newReviewScreenButton).toBeTruthy();
    expect(voteRatingElements.length > 0).toBeTruthy();
    expect(bookTitleElement).toBeTruthy();
  });

  it('should be render review itens correctly', async () => {
    await customRenderScreen();

    const reviewItens = await screen.findAllByTestId('review-card');

    expect(reviewItens.length).toEqual(reviewsListMock.length);
  });

  it('Flow: redirect to new review screen', async () => {
    const {newReviewScreenButton} = await customRenderScreen();

    //1) press new review button
    fireEvent.press(newReviewScreenButton);

    //2) check if redirect correctly
    const text = screen.getByText('NewReviewScreen');
    expect(text).toBeTruthy();

    //3 go back to book review panel screen
    const goBackButton = screen.getByTestId('go-back');
    fireEvent.press(goBackButton);
  });
});
