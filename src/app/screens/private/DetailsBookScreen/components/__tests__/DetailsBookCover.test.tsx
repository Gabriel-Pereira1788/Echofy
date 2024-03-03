import React from 'react';

import {render, screen} from '@test';

import {DetailsBookCover} from '..';

const imageUrl = 'https://www.johndoe.com/image.jpeg';
describe('DetailsBookCover', () => {
  it('should be render image correctly', () => {
    render(<DetailsBookCover imageUrl={imageUrl} />);

    const imageElement = screen.getByTestId('book-image-cover');
    expect(imageElement.props.source.uri).toEqual(imageUrl);
  });
});
