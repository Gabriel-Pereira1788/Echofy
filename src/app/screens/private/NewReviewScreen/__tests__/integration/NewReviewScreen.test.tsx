import React from 'react';

import {AppStack} from '@router';
import {
  act,
  fireEvent,
  renderScreen,
  screen,
  sectionBooksMock,
  server,
  waitFor,
} from '@test';

jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();

  jest.useRealTimers();
  jest.resetAllMocks();
});

async function customRenderScreen() {
  renderScreen(<AppStack initialRouteName="AppTabNavigator" />);

  //1) redirect to book screen
  const bookItens = await screen.findAllByTestId('book-item');
  fireEvent.press(bookItens[0]);

  const bookData = sectionBooksMock[0].books[0];
  await screen.findByText(bookData.bookTitle);

  //2) redirect to review panel screens
  const viewMoreButton = screen.getByText(/view more/i);

  fireEvent.press(viewMoreButton);

  await screen.findByText(bookData.bookTitle);
  const newReviewScreenButton = screen.getByTestId('new-review-screen-button');

  //3) redirect new review screen
  fireEvent.press(newReviewScreenButton);
  return {
    voteRatingItens: screen.getAllByTestId('vote-rating-item'),
    inputReviewContent: screen.getByPlaceholderText('Why this rating?'),
    submitButton: screen.getByText('Submit'),
  };
}

describe('NewReviewScreen', () => {
  it('should be render component correctly', async () => {
    const {voteRatingItens, inputReviewContent, submitButton} =
      await customRenderScreen();

    expect(voteRatingItens.length > 0).toBeTruthy();
    expect(inputReviewContent).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  it('Flow: add content review and send correctly', async () => {
    const {inputReviewContent, submitButton, voteRatingItens} =
      await customRenderScreen();

    //1) add rating
    act(() => {
      fireEvent(voteRatingItens[3], 'onPress');
    });

    //2) change input text
    const reviewContentText = 'Review content text';
    fireEvent.changeText(inputReviewContent, reviewContentText);

    expect(inputReviewContent.props.value).toEqual(reviewContentText);

    //3) submit review correctly

    fireEvent.press(submitButton);

    //4) check success toast message render
    const SUCCESS_MESSAGE = 'Success.';
    await waitFor(() => screen.getByTestId('toast'));
    await waitFor(() => screen.getByText(SUCCESS_MESSAGE));

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast')).toBeNull();

    //5) go back to previous screen
    const newReviewScreenButton = screen.getByTestId(
      'new-review-screen-button',
    );

    expect(newReviewScreenButton).toBeTruthy();
  });
});
