import React from 'react';

import {AppTabNavigator} from '@router';
import {
  act,
  fireEvent,
  renderScreen,
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

  jest.useRealTimers();
  jest.resetAllMocks();
});

async function customRenderScreen() {
  renderScreen(<AppTabNavigator initialRouteName="LibraryScreen" />);

  return {
    searchInput: screen.getByPlaceholderText(/search books/i),
    searchInputTitle: screen.getByText(/my books/i),
    libraryBookItens: await screen.findAllByTestId('library-book-item'),
  };
}
describe('LibraryScreen', () => {
  it('render component correctly', async () => {
    const {searchInput, searchInputTitle, libraryBookItens} =
      await customRenderScreen();
    expect(searchInput).toBeTruthy();
    expect(searchInputTitle).toBeTruthy();
    expect(libraryBookItens.length).toEqual(1);
  });

  it('Flow: should be search item by text', async () => {
    const {searchInput, libraryBookItens} = await customRenderScreen();

    fireEvent.changeText(searchInput, 'a');

    expect(libraryBookItens.length).toEqual(1);
  });

  it('Flow:should be redirect to book details screen on press item', async () => {
    const {libraryBookItens} = await customRenderScreen();

    //1) press item
    act(() => {
      fireEvent.press(libraryBookItens[0]);
    });

    //2) check redirect correctly
    const bookData = sectionBooksMock[0].books[0];
    const bookTitle = await screen.findByText(bookData.bookTitle);
    expect(bookTitle).toBeTruthy();

    //3) go back to previous screen
    const goBackButton = screen.getByTestId('go-back');
    expect(goBackButton).toBeTruthy();

    act(() => {
      fireEvent.press(goBackButton);
    });

    //4) check redirect to previous screen
    const searchInputTitle = screen.getByText(/my books/i);
    expect(searchInputTitle).toBeTruthy();
  });
});
