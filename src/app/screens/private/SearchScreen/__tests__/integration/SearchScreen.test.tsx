import React from 'react';

import {
  bookMockApi,
  fireEvent,
  mockedNavigate,
  renderScreen,
  screen,
  server,
  waitFor,
} from '@test';

import {categories} from '../../components/SearchScreenRecommendedCategories';
import {SearchScreen} from '../../SearchScreen';

function customRender() {
  renderScreen(<SearchScreen navigation={{} as any} route={{} as any} />);

  return {
    exploreInput: screen.getByPlaceholderText('Search Books or Author ...'),
    profileButton: screen.getByTestId('profile-button'),
    brandElement: screen.getByTestId('brand'),
    categoryItens: screen.getAllByTestId('category-item'),
    flatListHistoryBooksElement: screen.getByTestId('latest-list'),
  };
}

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

  it('redirect to profile screen', () => {
    const {profileButton} = customRender();

    fireEvent.press(profileButton);

    expect(mockedNavigate).toHaveBeenCalledWith('ProfileScreen');
  });

  it('redirect to category book screen', () => {
    const {categoryItens} = customRender();

    fireEvent.press(categoryItens[0]);

    expect(mockedNavigate).toHaveBeenCalledWith('CategoryBookScreen', {
      categoryIdentify: categories[0],
      categoryTitle: categories[0],
    });
  });

  it('should be add book to history books and render history books', async () => {
    const {exploreInput} = customRender();

    fireEvent.changeText(exploreInput, 'Alic');

    await screen.findByTestId('results-list');
    const bookItens = await screen.findAllByTestId('book-item');

    fireEvent.press(bookItens[0]);

    fireEvent.changeText(exploreInput, '');
    const historyBooksList = await screen.findByTestId('latest-list');

    const historyBooksRendered = historyBooksList.props.data.length;
    expect(historyBooksRendered).toEqual(1);
  });
});
