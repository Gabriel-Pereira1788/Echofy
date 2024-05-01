import React from 'react';

import {render, screen} from '@test';

import {BookDetailsCover} from '..';

const coverURI = 'https://www.johndoe.com/image.jpeg';
describe('BookDetailsCover', () => {
  it('should be render image correctly', () => {
    render(<BookDetailsCover coverURI={coverURI} />);

    const imageElement = screen.getByTestId('book-image');
    expect(imageElement.props.source.uri).toEqual(coverURI);
  });
});
