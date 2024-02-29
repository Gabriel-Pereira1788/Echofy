import React from 'react';

import {fireEvent, render, screen} from '@test';

import {SearchScreenExploreInput} from '../SearchScreenExploreInput';

const mockedChangeText = jest.fn();
function customRender() {
  render(<SearchScreenExploreInput onChangeText={mockedChangeText} />);

  return {
    exploreInput: screen.getByPlaceholderText('Search Books or Author ...'),
    exploreLabelElement: screen.getByText('Explore'),
  };
}
describe('SearchScreenExploreInput', () => {
  it('should be render component correctly', () => {
    const {exploreInput, exploreLabelElement} = customRender();

    expect(exploreInput).toBeTruthy();
    expect(exploreLabelElement).toBeTruthy();
  });

  it('should be dispatch change text correctly', () => {
    const {exploreInput} = customRender();

    fireEvent.changeText(exploreInput, 'John doe');

    expect(mockedChangeText).toHaveBeenCalledWith('John doe');
  });
});
