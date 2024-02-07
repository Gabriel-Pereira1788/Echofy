import React from 'react';

import {
  act,
  allCategoriesMock,
  authCredentialsMock,
  fireEvent,
  renderScreen,
  screen,
  server,
} from '@test';

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
    const {textCategories} = customRenderScreen();

    const sectionRecommendedForYou = await screen.findByText(
      'Recommended For You',
    );
    const sectionBestSeller = await screen.findByText('Best Seller');
    const sectionFiction = await screen.findByText('Fiction');
    const sectionLiterature = await screen.findByText('Literature');
    const sectionAdventure = await screen.findByText('Adventure');
    const allCategories = screen.getAllByTestId('category');

    expect(allCategories.length).toEqual(
      allCategoriesMock.splice(0, 10).length,
    );
    expect(textCategories).toBeTruthy();
    expect(sectionRecommendedForYou).toBeTruthy();
    expect(sectionBestSeller).toBeTruthy();
    expect(sectionFiction).toBeTruthy();
    expect(sectionLiterature).toBeTruthy();
    expect(sectionAdventure).toBeTruthy();
  });

  it('should be redirect to profile screen', () => {
    const {profileButton} = customRenderScreen();

    fireEvent.press(profileButton);

    expect(profileButton).toBeTruthy();
    expect(mockNavigate).toHaveBeenCalledWith('ProfileScreen');
  });

  it('should be redirect to category screen', async () => {
    const {} = customRenderScreen();
    const categoryItem = await screen.findByText(allCategoriesMock[0].text);
    act(() => {
      jest.resetAllMocks();
      fireEvent.press(categoryItem);
    });

    console.log('cateogryItem', categoryItem);
    expect(categoryItem).toBeTruthy();
    expect(mockNavigate).toHaveBeenCalledWith('CategoryBookScreen', {
      categoryIdentify: allCategoriesMock[0].text,
    });
  });
});
