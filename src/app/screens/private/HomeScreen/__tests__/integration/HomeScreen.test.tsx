import React from 'react';

import {AppStack} from '@router';
import {
  act,
  authCredentialsMock,
  bookMockApi,
  fireEvent,
  renderScreen,
  screen,
  sectionBooksMock,
  server,
} from '@test';

import {buildBookSections} from '../../functions/buildBookSections';

async function customRenderScreen() {
  renderScreen(<AppStack initialRouteName="AppTabNavigator" />);

  return {
    bookItens: await screen.findAllByTestId('book-item'),
    profileButton: screen.getByTestId('profile-button'),
    carouselList: screen.getByTestId('carousel'),
    seeMoreButton: screen.getByText('See more'),
  };
}

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
const categoriesMock = buildBookSections();
describe('HomeScreen', () => {
  it('render homeScreen correctly', async () => {
    const {profileButton, bookItens, seeMoreButton} =
      await customRenderScreen();

    const allCategories = await screen.findAllByTestId('category');

    expect(allCategories.length).toEqual(categoriesMock.length);
    expect(bookItens.length).toEqual(bookMockApi.docs.length);
    expect(profileButton).toBeTruthy();
    expect(seeMoreButton).toBeTruthy();
  });

  it('Flow: Redirect to book by category screen', async () => {
    const {seeMoreButton} = await customRenderScreen();
    //1) select and navigate to category  screen
    const categoryItem = await screen.findAllByTestId('category');
    expect(categoryItem[0]).toBeTruthy();

    act(() => {
      fireEvent.press(categoryItem[0]);
    });
    fireEvent.press(seeMoreButton);
    //2) check if render category correctly
    const categoryTitle = await screen.findByText(categoriesMock[0].title);
    expect(categoryTitle).toBeTruthy();

    //3) render list of books by category
    const allBookItens = await screen.findAllByTestId('category-book-item');
    expect(allBookItens.length).toEqual(bookMockApi.docs.length);

    //4) go back to previous screen
    const goBackButton = screen.getByTestId('go-back');
    fireEvent.press(goBackButton);

    //5) check if is return correctly
    const reRenderCategoryItens = await screen.findAllByTestId('category');
    expect(reRenderCategoryItens[0]).toBeTruthy();
  });

  it('Flow: Select book item', async () => {
    const {} = await customRenderScreen();

    const bookItens = await screen.findAllByTestId('book-item');
    expect(bookItens.length).toEqual(bookMockApi.docs.length);

    //1) select book item and redirect to book screen
    act(() => {
      fireEvent.press(bookItens[0]);
    });

    //2) check if render book screen correctly
    const bookData = sectionBooksMock[0].books[0];
    const bookTitleElement = await screen.findByText(bookData.bookTitle);
    expect(bookTitleElement).toBeTruthy();

    const bookAuthor = screen.getByText(bookData.bookAuthor);
    expect(bookAuthor).toBeTruthy();

    const bookCategories = screen.getAllByTestId('category-book-item');
    expect(bookCategories.length).toEqual(
      bookData.bookGenres.slice(0, 3).length,
    );

    const summaryTextElement = screen.getByTestId('summary-text');
    expect(summaryTextElement).toBeTruthy();

    const text = summaryTextElement.props.children[0] as string;
    const expectTextResume = bookData.bookDesc.slice(0, 500) + '...';
    expect(text.length).toEqual(expectTextResume.length);

    //3) go back to previous screen
    const goBackButton = screen.getByTestId('go-back');
    fireEvent.press(goBackButton);

    //4) check if is return correctly
    const reRenderBookItens = await screen.findAllByTestId('book-item');
    expect(reRenderBookItens[0]).toBeTruthy();
  });

  it('Flow: Redirect to profile screen', async () => {
    const {profileButton} = await customRenderScreen();
    expect(profileButton).toBeTruthy();
    //1) press profile button
    act(() => {
      fireEvent.press(profileButton);
    });

    //2) check if render screen correctly
    expect(screen.getByText(authCredentialsMock.email)).toBeTruthy();
    expect(screen.getAllByText(authCredentialsMock.name)[0]).toBeTruthy();
    expect(screen.getByText(authCredentialsMock.birthDate)).toBeTruthy();

    //3) go back to previous screen
    const goBackButton = screen.getByTestId('go-back');
    fireEvent.press(goBackButton);

    //4) check if is return correctly
    const reRenderBookItens = await screen.findAllByTestId('book-item');
    expect(reRenderBookItens[0]).toBeTruthy();
  });
});
