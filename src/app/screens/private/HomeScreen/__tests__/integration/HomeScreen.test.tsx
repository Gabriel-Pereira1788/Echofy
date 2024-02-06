import React from 'react';

import {
  authCredentialsMock,
  bookMock,
  renderScreen,
  screen,
  server,
} from '@test';

import {HomeScreen} from '../../HomeScreen';

const navigationMock: any = {
  navigate: jest.fn(),
};

jest.mock('@react-navigation/native', () => {
  const originalModules = jest.requireActual('@react-navigation/native');
  return {
    useNavigation: () => ({
      ...originalModules,
      navigate: jest.fn(),
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
  renderScreen(<HomeScreen navigation={navigationMock} route={{} as any} />);

  return {
    textCategories: screen.getByText('Categories'),
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

    expect(textCategories).toBeTruthy();
    expect(sectionRecommendedForYou).toBeTruthy();
    expect(sectionBestSeller).toBeTruthy();
    expect(sectionFiction).toBeTruthy();
    expect(sectionLiterature).toBeTruthy();
    expect(sectionAdventure).toBeTruthy();
  });
});
