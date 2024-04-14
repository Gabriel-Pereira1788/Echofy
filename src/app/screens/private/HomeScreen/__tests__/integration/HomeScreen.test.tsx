import React from 'react';

import {AppTabNavigator} from '@router';
import {
  act,
  allCategoriesMock,
  bookMockApi,
  fireEvent,
  renderScreen,
  screen,
  sectionBooksMock,
  server,
} from '@test';

async function customRenderScreen() {
  renderScreen(<AppTabNavigator initialRouteName="HomeStackNavigator" />);

  return {
    profileButton: await screen.findByTestId('profile-button'),
    textCategories: await screen.findByText('Categories'),
    listSections: screen.getByTestId('list-movies'),
  };
}

jest.unmock('@react-navigation/native');
beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
  // database.close();
  jest.useRealTimers();
  jest.resetAllMocks();
});

describe('HomeScreen', () => {
  it('render homeScreen correctly', async () => {
    const {profileButton, listSections, textCategories} =
      await customRenderScreen();

    const allCategories = await screen.findAllByTestId('category');

    expect(allCategories.length).toEqual(allCategoriesMock.slice(0, 10).length);
    console.log('listsections', listSections.props);
    expect(listSections.props.data.length).toEqual(8);
    expect(profileButton).toBeTruthy();
    expect(textCategories).toBeTruthy();
  });

  it('Flow: Select category', async () => {
    const {} = await customRenderScreen();
    //1) select and navigate to category  screen
    const categoryItem = await screen.findAllByTestId('category');
    expect(categoryItem[0]).toBeTruthy();

    fireEvent.press(categoryItem[0]);
    //2) check if render category correctly
    const categoryTitle = await screen.findByText(allCategoriesMock[0].text);
    expect(categoryTitle).toBeTruthy();

    //3) render list of books by category
    const allBookItens = await screen.findAllByTestId('category-book-item');
    expect(allBookItens.length).toEqual(bookMockApi.docs.length);

    //4) return to home screen
    const goBackButton = screen.getByTestId('go-back');
    fireEvent.press(goBackButton);

    //5) check if is return correctly
    const reRenderCategoryItens = await screen.findAllByTestId('category');
    expect(reRenderCategoryItens[0]).toBeTruthy();
  });

  it('Flow: Press "see more" on section item', async () => {
    const {} = await customRenderScreen();
    //1) Select section item and press "see more" button
    const seeMoreItens = await screen.findAllByText('See more');
    act(() => {
      fireEvent.press(seeMoreItens[0]);
    });

    //2) Check if render category book screen correctly

    const titleElement = screen.getByText(/recommended for you/i);

    expect(titleElement).toBeTruthy();

    //3 Check if render books itens correctly
    const allBookItens = await screen.findAllByTestId('category-book-item');
    expect(allBookItens.length).toEqual(bookMockApi.docs.length);

    //4) return to home screen
    const goBackButton = screen.getByTestId('go-back');
    fireEvent.press(goBackButton);

    //5) check if is  return correctly
    const reRenderSeMoreItens = await screen.findAllByText('See more');
    expect(reRenderSeMoreItens[0]).toBeTruthy();
  });

  it('Flow: Select book item', async () => {
    const {} = await customRenderScreen();

    const bookItens = await screen.findAllByTestId('book-item');
    expect(bookItens.length).toEqual(
      sectionBooksMock.length * bookMockApi.docs.length,
    );

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
    //3) return to home screen
    const goBackButton = screen.getByTestId('go-back');
    fireEvent.press(goBackButton);

    //4) check if is return correctly
    const reRenderBookItens = await screen.findAllByTestId('book-item');
    expect(reRenderBookItens[0]).toBeTruthy();
  });
});
