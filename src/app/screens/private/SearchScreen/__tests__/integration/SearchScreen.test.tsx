import React from 'react';

import {renderScreen, screen, server} from '@test';

import {SearchScreen} from '../../SearchScreen';

function customRender() {
  renderScreen(<SearchScreen navigation={{} as any} route={{} as any} />);

  return {
    exploreInput: screen.getByPlaceholderText('Search Books or Author ...'),
    profileButton: screen.getByTestId('profile-button'),
    brandElement: screen.getByTestId('brand'),
  };
}

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});
describe('SearchScreen', () => {
  it('should be render component correctly', () => {
    const {exploreInput, profileButton, brandElement} = customRender();

    expect(profileButton).toBeTruthy();
    expect(exploreInput).toBeTruthy();
    expect(brandElement).toBeTruthy();
  });
});
