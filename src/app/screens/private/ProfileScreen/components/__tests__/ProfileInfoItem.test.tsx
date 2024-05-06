import React from 'react';

import {render, screen} from '@test';

import {ProfileInfoItem} from '../ProfileInfoItem';

describe('ProfileInfoItem', () => {
  it('should be render component correctly', () => {
    render(<ProfileInfoItem label="Name" value="John doe" />);

    expect(screen.getByText('Name')).toBeTruthy();
    expect(screen.getByText('John doe')).toBeTruthy();
  });
});
