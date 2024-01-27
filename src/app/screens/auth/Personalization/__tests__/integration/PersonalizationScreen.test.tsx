import React from 'react';

import {act, allCategoriesMock, fireEvent, renderScreen, screen} from '@test';

import {PersonalizationScreen} from '../../PersonalizationScreen';

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

    expect(navigation.navigate).not.toHaveBeenCalled();
  });

  it('should be navigate to ready to go screen', async () => {
    const {buttonSubmit} = customRender();
    const categoryItens = await screen.findAllByTestId('category-item-button');

    const categoryFirst = categoryItens[0];
    const categorySecond = categoryItens[1];
    const categoryThird = categoryItens[2];

    act(() => {
      fireEvent.press(categoryFirst);
    });
    act(() => {
      fireEvent.press(categorySecond);
    });
    act(() => {
      fireEvent.press(categoryThird);
    });

    act(() => {
      fireEvent.press(buttonSubmit);
    });

    expect(navigation.navigate).toHaveBeenCalled();
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
