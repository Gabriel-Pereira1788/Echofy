import React from 'react';

import {act, fireEvent, render, screen} from '@test';
import {ReactTestInstance} from 'react-test-renderer';

import {buildBookSections} from '../../functions/buildBookSections';
import {HomeScreenCategories} from '../HomeScreenCategories';

const bookSectionsMock = buildBookSections();
const onSelectMock = jest.fn();
function customRender() {
  render(
    <HomeScreenCategories
      bookSections={bookSectionsMock}
      currentSection={bookSectionsMock[0]}
      onSelect={onSelectMock}
    />,
  );

  return {
    categoriesElements: screen.getAllByTestId('category'),
    categoryList: screen.getByTestId('category-list'),
  };
}
describe('HomeScreenCategories', () => {
  it('should be render component correctly', () => {
    const {categoriesElements} = customRender();

    const categorySelected = categoriesElements[0]
      .children[0] as ReactTestInstance;

    expect(categorySelected.props.backgroundColor).toEqual('activeColor');
    expect(categoriesElements.length).toEqual(bookSectionsMock.length);
  });

  it('should be select category', async () => {
    const {categoriesElements} = customRender();

    //1) Select new category
    act(async () => {
      fireEvent.press(categoriesElements[1]);
    });

    //2) verify onSelect function called
    expect(onSelectMock).toHaveBeenCalled();
  });
});
