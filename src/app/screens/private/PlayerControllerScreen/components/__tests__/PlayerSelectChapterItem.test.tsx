import React from 'react';

import {mockTrack, render} from '@test';

import {PlayerSelectChapterItem} from '../PlayerSelectChapterItem';

describe('PlayerSelectChapterItem', () => {
  it('render component correctly', () => {
    const {getByText, getByTestId} = render(
      <PlayerSelectChapterItem track={mockTrack} />,
    );

    expect(getByTestId('book-image')).toBeTruthy();
    expect(getByText(mockTrack.title)).toBeTruthy();
  });
});
