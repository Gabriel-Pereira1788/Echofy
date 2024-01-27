import React from 'react';

import {render} from '@test';

import {PersonalizationScreenHeader} from '../PersonalizationScreenHeader';

describe('PersonalizationScreenHeader', () => {
  it('should be render correctly', () => {
    const {getByText} = render(<PersonalizationScreenHeader />);

    expect(getByText('Personalize Suggestion')).toBeTruthy();
    expect(
      getByText(
        'Choose min 3 topic you like, we will give you more often that relate to it.',
      ),
    ).toBeTruthy();
  });
});
