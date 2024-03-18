import React from 'react';

import {render} from '@test';

import {PlayerCover} from '..';

const coverURI = 'https://www.johndoe.com/image.jpg';
describe('PlayerCoover', () => {
  it('render component correctly', () => {
    const {getByTestId} = render(<PlayerCover coverURI={coverURI} />);

    const imageElement = getByTestId('book-image');

    expect(imageElement).toBeTruthy();
    expect(imageElement.props.source.uri).toEqual(coverURI);
  });
});
