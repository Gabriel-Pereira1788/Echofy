import React from 'react';

import {act, fireEvent, renderScreen, screen} from '@test';

import {onboardingPages} from '../onBoardingPage';
import {OnboardingScreen} from '../OnboardingScreen';

const mockFinishOnboarding = jest.fn();
jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    useSettingsService: () => ({
      finishOnboarding: mockFinishOnboarding,
    }),
  };
});
function customRender() {
  renderScreen(<OnboardingScreen />);

  return {
    pageItens: screen.getAllByTestId('onboarding-page-item'),
    buttonSkip: screen.getByText('Skip'),
    buttonNext: screen.getByText('Next'),
  };
}

describe('OnboardingScreen', () => {
  it('should be render component', () => {
    const {pageItens, buttonNext, buttonSkip} = customRender();

    expect(pageItens.length).toEqual(onboardingPages.length);
    expect(buttonNext).toBeTruthy();
    expect(buttonSkip).toBeTruthy();
  });

  it('should be finish onboarding on press skip button', () => {
    const {buttonSkip} = customRender();

    act(() => {
      fireEvent.press(buttonSkip);
    });

    expect(mockFinishOnboarding).toHaveBeenCalled();
  });

  it('should be render get started button on last page and finish onboarding.', () => {
    const {buttonNext} = customRender();
    const carouselContent = screen.getByTestId('carousel-content');
    const eventData = {
      contentSize: {
        // Dimensions of the scrollable content
        height: 500,
        width: 2000,
      },
      layoutMeasurement: {
        // Dimensions of the device
        height: 100,
        width: 2000,
      },
    };

    act(() => {
      fireEvent.scroll(carouselContent, {
        nativeEvent: {
          ...eventData,
          contentOffset: {
            x: 1500,
          },
        },
      });
      fireEvent.press(buttonNext);
    });

    const getStartedButton = screen.getByText('Let`s Get Started!');
    expect(getStartedButton).toBeTruthy();

    fireEvent.press(getStartedButton);

    expect(mockFinishOnboarding).toHaveBeenCalled();
  });
});
