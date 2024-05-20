import React from 'react';
import {Animated} from 'react-native';

import {render, screen, sectionBooksMock} from '@test';

import {HomeScreenBackdrop} from '../HomeScreenBackdrop';

const scrollX = new Animated.Value(0);
const books = sectionBooksMock[0].books;
describe('HomeScreenBackdrop', () => {
  it('render component correctly', () => {
    render(
      <HomeScreenBackdrop list={sectionBooksMock[0].books} scrollX={scrollX} />,
    );

    expect(screen.getByTestId('backdrop-list').props.data.length).toEqual(
      books.length,
    );
  });
});
