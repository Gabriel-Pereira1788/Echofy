import React from 'react';

import {AppStack} from '@router';
import {act, renderScreen, screen, server} from '@test';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();

  jest.useRealTimers();
  jest.resetAllMocks();
});
function customRenderScreen() {
  renderScreen(<AppStack initialRouteName="SyncScreen" />);

  return {
    textElement: screen.getByText(
      "Hang tight! We're updating your book collection. This won't take long.",
    ),
    illustrationElement: screen.getByTestId('image-illustration'),
    loaderElement: screen.getByTestId('loader-element'),
  };
}

describe('SyncScreen', () => {
  it('render component correctly', () => {
    const {textElement, illustrationElement, loaderElement} =
      customRenderScreen();

    expect(textElement).toBeTruthy();
    expect(illustrationElement).toBeTruthy();
    expect(loaderElement).toBeTruthy();
  });

  it('Flow: should be redirect to home screen', async () => {
    const {} = customRenderScreen();

    act(() => {
      jest.runAllTimers();
    });

    const bookItens = await screen.findAllByTestId('book-item');

    expect(bookItens.length > 0).toBeTruthy();
  });
});
