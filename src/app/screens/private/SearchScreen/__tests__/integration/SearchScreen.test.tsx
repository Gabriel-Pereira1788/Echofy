import React from 'react';

import {AppTabNavigator} from '@router';
import {
  authCredentialsMock,
  bookMock,
  bookMockApi,
  fireEvent,
  renderScreen,
  screen,
  server,
  waitFor,
} from '@test';

import {categories} from '../../components/SearchScreenRecommendedCategories';

function customRender() {
  renderScreen(<AppTabNavigator initialRouteName="SearchStackNavigator" />);

  return {
    exploreInput: screen.getByPlaceholderText('Search Books or Author ...'),
    profileButton: screen.getByTestId('profile-button'),
    brandElement: screen.getByTestId('brand'),
    categoryItens: screen.getAllByTestId('category-item'),
    flatListHistoryBooksElement: screen.getByTestId('latest-list'),
  };
}

jest.unmock('@react-navigation/native');
const mockUid = authCredentialsMock.id;
jest.mock('@providers', () => {
  const originalModule = jest.requireActual('@providers');
  return {
    ...originalModule,
    useAuthContext: () => ({
      uid: mockUid,
    }),
  };
});
beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
});
describe('SearchScreen', () => {
  it('should be render component correctly', () => {
    const {
      exploreInput,
      profileButton,
      brandElement,
      categoryItens,
      flatListHistoryBooksElement,
    } = customRender();

    expect(profileButton).toBeTruthy();
    expect(exploreInput).toBeTruthy();
    expect(brandElement).toBeTruthy();
    expect(categoryItens.length).toEqual(categories.length);
    expect(flatListHistoryBooksElement).toBeTruthy();
  });

  it('should be render search results list', async () => {
    const {exploreInput} = customRender();

    const searchText = 'Alic';
    fireEvent.changeText(exploreInput, searchText);

    const filteredMovies = bookMockApi.docs.filter(book =>
      book.book_title.includes(searchText),
    );

    const resultsListElement = await screen.findByTestId('results-list');

    await waitFor(() =>
      expect(resultsListElement.children.length).toEqual(filteredMovies.length),
    );
  });

  it('Flow: Select category', async () => {
    const {categoryItens} = customRender();

    //1) select category and navigate to category book screen
    fireEvent.press(categoryItens[0]);

    //2) get category book screen title correctly
    const categoryTitleElement = await screen.findByText(categories[0]);
    expect(categoryTitleElement).toBeTruthy();

    //3) render list of books by category
    const allBookItens = await screen.findAllByTestId('category-book-item');
    expect(allBookItens.length).toEqual(bookMockApi.docs.length);

    //4) return to search screen
    const goBackButton = screen.getByTestId('go-back');
    fireEvent.press(goBackButton);

    //5) check is return correctly
    const exploreText = screen.getByText(/explore/i);
    expect(exploreText).toBeTruthy();
  });

  it('Flow: Select Book', async () => {
    const {exploreInput} = customRender();

    //1) Search book
    fireEvent.changeText(exploreInput, 'Alic');
    //2) Render the result list
    await screen.findByTestId('results-list');
    const bookItens = await screen.findAllByTestId('book-item');

    //3) navigate to book screen
    fireEvent.press(bookItens[0]);

    //4) Check is render book correctly.

    const bookTitleElement = await screen.findByText(bookMock.bookTitle);
    expect(bookTitleElement).toBeTruthy();

    const bookAuthor = screen.getByText(bookMock.bookAuthor);
    expect(bookAuthor).toBeTruthy();

    const bookCategories = screen.getAllByTestId('category-book-item');
    expect(bookCategories.length).toEqual(
      bookMock.bookGenres.slice(0, 3).length,
    );

    const summaryTextElement = screen.getByTestId('summary-text');
    expect(summaryTextElement).toBeTruthy();

    const text = summaryTextElement.props.children[0] as string;
    const expectTextResume = bookMock.bookDesc.slice(0, 500) + '...';
    expect(text.length).toEqual(expectTextResume.length);

    //5) return to search screen

    const goBackButton = screen.getByTestId('go-back');
    fireEvent.press(goBackButton);

    //6) clean input text
    fireEvent.changeText(exploreInput, '');
    const historyBooksList = await screen.findByTestId('latest-list');

    //7) check render history books correctly
    const historyBooksRendered = historyBooksList.props.data.length;
    expect(historyBooksRendered).toEqual(1);
  });
});
