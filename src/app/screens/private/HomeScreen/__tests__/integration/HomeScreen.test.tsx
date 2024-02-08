import React from 'react';

import {
  act,
  allCategoriesMock,
  authCredentialsMock,
  bookMock,
  fireEvent,
  renderScreen,
  screen,
  server,
} from '@test';
import {dimensions} from '@utils';

import {HomeScreen} from '../../HomeScreen';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModules = jest.requireActual('@react-navigation/native');
  return {
    useNavigation: () => ({
      ...originalModules,
      navigate: mockNavigate,
    }),
  };
});

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

function customRenderScreen() {
  renderScreen(
    <HomeScreen
      navigation={{navigate: mockNavigate} as any}
      route={{} as any}
    />,
  );

  return {
    textCategories: screen.getByText('Categories'),
    profileButton: screen.getByTestId('profile-button'),
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
    const {textCategories, profileButton, listSections} = customRenderScreen();
    const allCategories = await screen.findAllByTestId('category');

    expect(allCategories.length).toEqual(
      allCategoriesMock.splice(0, 10).length,
    );
    expect(listSections.props.data.length).toEqual(5);
    expect(profileButton).toBeTruthy();
    expect(textCategories).toBeTruthy();
  });

  it('should be redirect to profile screen', () => {
    const {profileButton} = customRenderScreen();

    fireEvent.press(profileButton);

    expect(profileButton).toBeTruthy();
    expect(mockNavigate).toHaveBeenCalledWith('ProfileScreen');
  });

  it('should be redirect to category screen', async () => {
    const {listSections} = customRenderScreen();

    const categoryItem = await screen.findByText(allCategoriesMock[0].text);
    act(() => {
      jest.resetAllMocks();
      fireEvent.press(categoryItem);
    });

    expect(categoryItem).toBeTruthy();
    expect(mockNavigate).toHaveBeenCalledWith('CategoryBookScreen', {
      categoryIdentify: allCategoriesMock[0].text,
    });
  });

  it('should be press "see more" action', async () => {
    const {} = customRenderScreen();
    const seeMoreItens = await screen.findAllByText('See more');
    act(() => {
      jest.resetAllMocks();
      fireEvent.press(seeMoreItens[0]);
    });

    expect(seeMoreItens).toBeTruthy();
    expect(mockNavigate).toHaveBeenCalledWith('CategoryBookScreen', {
      categoryIdentify: 'recommended-for-you',
    });
  });

  it('should be press book item and redirect to book screen ', async () => {
    const {listSections} = customRenderScreen();

    act(() => {
      fireEvent.scroll(listSections, {
        nativeEvent: {
          contentSize: {height: 600, width: 400},
          contentOffset: {y: 400, x: 0},
          layoutMeasurement: {
            height: dimensions.height,
            width: dimensions.width,
          }, // Dimensions of the device
        },
      });
    });
    const bookItens = await screen.findAllByTestId('book-item');

    act(() => {
      jest.resetAllMocks();
      fireEvent.press(bookItens[0]);
    });

    expect(bookItens).toBeTruthy();
    expect(mockNavigate).toHaveBeenCalledWith('BookScreen', {
      id: bookMock.docs[0].id,
    });
  });
});
