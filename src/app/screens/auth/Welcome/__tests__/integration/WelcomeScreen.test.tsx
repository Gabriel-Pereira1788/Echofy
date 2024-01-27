import React from 'react';

import {fireEvent, renderScreen, screen, server} from '@test';

import {WelcomeScreen} from '../../WelcomeScreen';

const navigation: any = {
  navigate: jest.fn(),
};

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});
function customRenderScreen() {
  renderScreen(<WelcomeScreen navigation={navigation} route={{} as any} />);

  return {
    buttonRedirect: screen.getByText('Personalize Your Account'),
    buttonSkip: screen.getByText('Skip'),
    welcomeText: screen.getByText('Welcome!'),
    titleText: screen.getByText('Find what you are looking for'),
    subtitleText: screen.getByText(
      'By personalize your account, we can help you to find what you like.',
    ),
  };
}

describe('WelcomeScreen', () => {
  it('should be render screen correctly', () => {
    const {subtitleText, titleText, welcomeText, buttonRedirect, buttonSkip} =
      customRenderScreen();

    expect(subtitleText).toBeTruthy();
    expect(titleText).toBeTruthy();
    expect(welcomeText).toBeTruthy();
    expect(buttonRedirect).toBeTruthy();
    expect(buttonSkip).toBeTruthy();
  });

  it('should be redirect to personalization screen', () => {
    const {buttonRedirect} = customRenderScreen();
    fireEvent.press(buttonRedirect);

    expect(navigation.navigate).toHaveBeenCalledWith('PersonalizationScreen');
  });

  it('should be skip personalization account', () => {
    const {buttonRedirect} = customRenderScreen();
    fireEvent.press(buttonRedirect);

    expect(navigation.navigate).toHaveBeenCalledWith('PersonalizationScreen');
  });
});
