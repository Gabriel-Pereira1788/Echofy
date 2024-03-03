import React from 'react';

import {render, screen} from '@test';

import {DetailsBookAttribution} from '..';

describe('DetailsBookAttribution', () => {
  it('render component correctly', () => {
    render(<DetailsBookAttribution author="John doe" title="John doe book" />);

    expect(screen.getByText('John doe')).toBeTruthy();
    expect(screen.getByText('John doe book')).toBeTruthy();
  });
});
