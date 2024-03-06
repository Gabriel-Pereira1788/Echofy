import React from 'react';

import {render, screen} from '@test';

import {DetailsBookCover} from '..';

const coverURI = 'https://www.johndoe.com/image.jpeg';
describe('DetailsBookCover', () => {
  it('should be render image correctly', () => {
    render(<DetailsBookCover coverURI={coverURI} />);

    const imageElement = screen.getByTestId('book-image');
    expect(imageElement.props.source.uri).toEqual(coverURI);
  });
});
