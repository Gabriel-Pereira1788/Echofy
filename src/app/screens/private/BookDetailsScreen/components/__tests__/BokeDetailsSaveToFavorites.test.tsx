import React from 'react';

import {act, bookMock, fireEvent, render, screen, server, waitFor} from '@test';

import {Toast} from '@components';

import {BookDetailsSaveToFavorites} from '../BookDetailsSaveToFavorites';

async function customRender() {
  render(
    <>
      <BookDetailsSaveToFavorites bookId={bookMock.id} />
      <Toast />
    </>,
  );

  return {
    iconMarkPress: await screen.findByTestId('icon-mark-element'),
  };
}

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();

  jest.useRealTimers();
  jest.resetAllMocks();
});
describe('BookDetailsSaveToFavorites', () => {
  it('render component correctly', async () => {
    const {iconMarkPress} = await customRender();

    expect(iconMarkPress).toBeTruthy();
  });

  it('should be send to favorites', async () => {
    const {iconMarkPress} = await customRender();

    await act(() => {
      fireEvent.press(iconMarkPress);
    });

    const SUCCESS_MESSAGE = 'Sended to favorites!';

    await waitFor(() => screen.getByTestId('toast'));
    await waitFor(() => screen.getByText(SUCCESS_MESSAGE));
  });
});
