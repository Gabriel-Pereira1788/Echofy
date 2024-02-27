import React from 'react';

import {CategoryIdentify} from '@domain';
import {
  allCategoriesMock,
  fireEvent,
  mockedNavigate,
  render,
  screen,
  server,
} from '@test';

import {HomeScreenHeader} from '../HomeScreenHeader';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
});

function customRender() {
  render(<HomeScreenHeader />);

  return {
    profileButton: screen.getByTestId('profile-button'),
  };
}
describe('HomeScreenHeader', () => {
  it('should be render home screen header', async () => {
    const {profileButton} = customRender();

    expect(profileButton).toBeTruthy();
    const allCategories = await screen.findAllByTestId('category');

    expect(allCategories.length).toEqual(allCategoriesMock.slice(0, 10).length);
  });

  it('should be redirect to category book screen', async () => {
    const {profileButton} = customRender();

    expect(profileButton).toBeTruthy();
    const allCategories = await screen.findAllByTestId('category');

    fireEvent.press(allCategories[0]);
    expect(mockedNavigate).toHaveBeenCalledWith('CategoryBookScreen', {
      categoryIdentify:
        allCategoriesMock[0].text.toLowerCase() as CategoryIdentify,
      categoryTitle: allCategoriesMock[0].text,
    });
  });

  it('should be redirect to profile screen', async () => {
    const {profileButton} = customRender();

    expect(profileButton).toBeTruthy();
    fireEvent.press(profileButton);

    expect(mockedNavigate).toHaveBeenCalledWith('ProfileScreen');
  });
});
