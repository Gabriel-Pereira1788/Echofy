import React from 'react';

import {fireEvent, renderScreen, screen} from '@test';

import ErrorScreen from '../ErrorScreen';

const mockedGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      goBack: mockedGoBack,
    }),
  };
});
describe('ErrorScreen', () => {
  it('render screen correctly', () => {
    renderScreen(<ErrorScreen />);

    const titleText = screen.getByText('Ops, Something Went Wrong');
    const messageText = screen.getByText(
      'Please check your internet connection and try again.',
    );
    const buttonRetry = screen.getByText('Retry');
    expect(titleText).toBeTruthy();
    expect(messageText).toBeTruthy();
    expect(buttonRetry).toBeTruthy();
  });

  it('should be press retry function correctly', () => {
    renderScreen(<ErrorScreen />);

    const buttonRetry = screen.getByText('Retry');
    fireEvent.press(buttonRetry);

    expect(mockedGoBack).toHaveBeenCalled();
  });
});
