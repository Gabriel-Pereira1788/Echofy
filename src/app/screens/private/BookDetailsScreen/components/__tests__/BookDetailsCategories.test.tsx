import React from 'react';

import {render, screen} from '@test';

import {BookDetailsCategories} from '..';

describe('BookDetailsCategories', () => {
  it('should be render number of categories correctly', () => {
    render(
      <BookDetailsCategories
        categories={['Adventure', 'Fantasy', 'Fairy tales', 'Phylosophy']}
      />,
    );

    expect(screen.getAllByTestId('category-book-item').length).toEqual(3);
  });
});
