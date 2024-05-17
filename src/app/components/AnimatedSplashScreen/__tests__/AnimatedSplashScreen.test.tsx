import React from 'react';

import {render, screen} from '@test';

import {AnimatedSplashScreen} from '../AnimatedSplashScreen';

const onFinishMock = jest.fn();
const onInitializeApp = jest.fn();
beforeAll(() => {
  jest.useFakeTimers();
});

describe('AnimatedSplashScreen', () => {
  it('render component correctly', () => {
    render(
      <AnimatedSplashScreen
        onFinish={onFinishMock}
        onInitializeApp={onInitializeApp}
      />,
    );

    expect(screen.getByTestId('logo')).toBeTruthy();
  });
});
