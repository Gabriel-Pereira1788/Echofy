import React from 'react';

import {
  act,
  allCategoriesMock,
  fireEvent,
  renderScreen,
  screen,
  server,
} from '@test';

import {PersonalizationScreen} from '../../PersonalizationScreen';

const mockReset = jest.fn();
jest.mock('@hooks', () => {
  const originalModule = jest.requireActual('@hooks');

  return {
    ...originalModule,
    useResetAuthStack: () => ({reset: mockReset}),
  };
});

const navigation: any = {
  navigate: jest.fn(),
};
function customRender() {
  renderScreen(
    <PersonalizationScreen navigation={navigation} route={{} as any} />,
  );

  return {
    titleElement: screen.getByText('Personalize Suggestion'),
    subtitleElement: screen.getByText(
      'Choose min 3 topic you like, we will give you more often that relate to it.',
    ),
    buttonSubmit: screen.getByText('Submit'),
    buttonSkip: screen.getByText('Skip'),
    inputSearch: screen.getByPlaceholderText('Search Categories'),
  };
}

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

describe('PersonalizationScreen', () => {
  it('should be render component correctly', async () => {
    const {
      buttonSkip,
      buttonSubmit,
      inputSearch,
      titleElement,
      subtitleElement,
    } = customRender();
    const categoryItens = await screen.findAllByTestId('category-item-button');
    expect(buttonSkip).toBeTruthy();

    expect(buttonSubmit).toBeTruthy();

    const expectedCategoriesToRender = allCategoriesMock.filter(
      (_, index) => index < 8,
    );

    expect(categoryItens.length).toEqual(expectedCategoriesToRender.length);
    expect(inputSearch).toBeTruthy();
    expect(titleElement).toBeTruthy();
    expect(subtitleElement).toBeTruthy();
  });

  it('should be block navigation if the minimum number of categories has not been selected', () => {
    const {buttonSubmit} = customRender();

    fireEvent.press(buttonSubmit);

    expect(mockReset).not.toHaveBeenCalled();
  });

  it('should be navigate to ready to go screen', async () => {
    const {buttonSubmit} = customRender();
    const categoryItens = await screen.findAllByTestId('category-item-button');

    const categoryFirst = categoryItens[0];
    const categorySecond = categoryItens[1];
    const categoryThird = categoryItens[2];

    fireEvent.press(categoryFirst);

    fireEvent.press(categorySecond);

    fireEvent.press(categoryThird);

    fireEvent.press(buttonSubmit);

    expect(mockReset).toHaveBeenCalled();
  });

  it('should be dispatch search function correctly', async () => {
    const {inputSearch} = customRender();
    await screen.findAllByTestId('category-item-button');

    act(() => {
      fireEvent.changeText(inputSearch, 'B');
    });

    const expectedCategoriesToRender = allCategoriesMock.filter(category =>
      category.text.includes('B'),
    );
    const categoryItens = screen.getAllByTestId('category-item-button');
    expect(categoryItens.length).toEqual(expectedCategoriesToRender.length);
  });
});
