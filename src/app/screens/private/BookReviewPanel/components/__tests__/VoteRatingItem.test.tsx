import React from 'react';

import {render, screen} from '@test';

import {VoteRatingItem} from '../VoteRatingItem';

const INDEX = 1;
const PERCENTAGE = 20;
const COUNT = 5;
describe('VoteRatingItem', () => {
  it('should be render component correctly', () => {
    render(
      <VoteRatingItem count={COUNT} index={INDEX} percentage={PERCENTAGE} />,
    );

    const identifyElement = screen.getByText(`${INDEX + 1}`);
    expect(identifyElement).toBeTruthy();

    const innerBarElement = screen.getByTestId('inner-bar');
    expect(innerBarElement.props.style[0].width).toEqual(`${PERCENTAGE}%`);

    const countElement = screen.getByText(`${COUNT}`);
    expect(countElement).toBeTruthy();
  });
});
