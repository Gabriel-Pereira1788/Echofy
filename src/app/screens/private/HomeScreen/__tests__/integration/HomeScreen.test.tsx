import React from 'react';

import {
  act,
  allCategoriesMock,
  authCredentialsMock,
  bookMockApi,
  fireEvent,
  mockedNavigate,
  renderScreen,
  screen,
  server,
} from '@test';

import {HomeScreen} from '../../HomeScreen';

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

async function customRenderScreen() {
  renderScreen(<HomeScreen navigation={{} as any} route={{} as any} />);

  return {
    profileButton: await screen.findByTestId('profile-button'),
    textCategories: await screen.findByText('Categories'),
    listSections: screen.getByTestId('list-movies'),
  };
}

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
});

describe('HomeScreen', () => {
  it('render homeScreen correctly', async () => {
    const {profileButton, listSections, textCategories} =
      await customRenderScreen();
    const allCategories = await screen.findAllByTestId('category');

    expect(allCategories.length).toEqual(allCategoriesMock.slice(0, 10).length);
    expect(listSections.props.data.length).toEqual(8);
    expect(profileButton).toBeTruthy();
    expect(textCategories).toBeTruthy();
  });

  it('should be redirect to profile screen', async () => {
    const {profileButton} = await customRenderScreen();

    fireEvent.press(profileButton);

    expect(profileButton).toBeTruthy();
    expect(mockedNavigate).toHaveBeenCalledWith('ProfileScreen');
  });

  it('should be redirect to category screen', async () => {
    const {} = await customRenderScreen();

    const categoryItem = await screen.findAllByTestId('category');

    act(() => {
      jest.resetAllMocks();
      fireEvent.press(categoryItem[0]);
    });

    expect(categoryItem[0]).toBeTruthy();
    expect(mockedNavigate).toHaveBeenCalledWith('CategoryBookScreen', {
      categoryIdentify: allCategoriesMock[0].text.toLowerCase(),
      categoryTitle: allCategoriesMock[0].text,
    });
  });

  it('should be press "see more" action', async () => {
    const {} = await customRenderScreen();
    const seeMoreItens = await screen.findAllByText('See more');
    act(() => {
      jest.resetAllMocks();
      fireEvent.press(seeMoreItens[0]);
    });

    expect(seeMoreItens).toBeTruthy();
    expect(mockedNavigate).toHaveBeenCalledWith('CategoryBookScreen', {
      categoryIdentify: 'recommended-for-you',
      categoryTitle: 'Recommended For You',
    });
  });

  it('should be press book item and redirect to book screen ', async () => {
    const {} = await customRenderScreen();

    const bookItens = await screen.findAllByTestId('book-item');

    act(() => {
      jest.resetAllMocks();
      fireEvent.press(bookItens[0]);
    });

    expect(bookItens.length).toEqual(24);
    expect(mockedNavigate).toHaveBeenCalledWith('BookScreen', {
      id: bookMockApi.docs[0].id,
    });
  });
});
