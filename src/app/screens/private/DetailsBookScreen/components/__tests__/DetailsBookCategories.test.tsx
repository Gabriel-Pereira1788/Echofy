import React from 'react';

import {render, screen} from '@test';

import {DetailsBookCategories} from '..';

describe('DetailsBookCategories', () => {
  it('should be render number of categories correctly', () => {
    render(
      <DetailsBookCategories
        categories={['Adventure', 'Fantasy', 'Fairy tales', 'Phylosophy']}
      />,
    );

    expect(screen.getAllByTestId('category-book-item').length).toEqual(3);
  });
});
