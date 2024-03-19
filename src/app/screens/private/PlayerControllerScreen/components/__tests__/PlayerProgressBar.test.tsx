import React from 'react';

import {fireGestureHandler, render, screen} from '@test';
import {PanGesture, State} from 'react-native-gesture-handler';
import {act} from 'react-test-renderer';

import {PlayerProgressBar} from '..';

const mockOnPlay = jest.fn();
const mockOnPause = jest.fn();

beforeAll(() => {
  jest.useFakeTimers();
});
function customRender() {
  render(<PlayerProgressBar onPause={mockOnPause} onPlay={mockOnPlay} />);

  return {
    swipeGestureElement: screen.getByTestId('pan'),
    minutesPositionElement: screen.getByTestId('minutes-position'),
    minutosDurationElement: screen.getByTestId('minutes-duration'),
  };
}

describe('PlayerProgressBar', () => {
  it('render component correctly', () => {
    const {
      minutesPositionElement,
      minutosDurationElement,
      swipeGestureElement,
    } = customRender();

    expect(minutesPositionElement).toBeTruthy();
    expect(minutosDurationElement).toBeTruthy();
    expect(swipeGestureElement).toBeTruthy();
  });

  it('should be dispatch gesture event', () => {
    const {swipeGestureElement} = customRender();

    fireGestureHandler<PanGesture>(swipeGestureElement, [
      {state: State.BEGAN, translationX: 0},
      {state: State.ACTIVE, translationX: 10},
      {translationX: 20},
      {translationX: 20},
      {state: State.END, translationX: 30},
    ]);

    act(() => {
      jest.runAllTimers();
    });
    expect(mockOnPause).toHaveBeenCalled();
  });
});
