import React from 'react';

import {audioTracker} from '@infra';
import {PlayerStatus} from '@services';
import {fireEvent, render, screen} from '@test';

import {PlayerButtons} from '..';

const mockOnPlay = jest.fn();
const mockOnPause = jest.fn();
function customRender(playerStatus?: PlayerStatus) {
  render(
    <PlayerButtons
      onPlay={mockOnPlay}
      onPause={mockOnPause}
      playerStatus={playerStatus ? playerStatus : 'play'}
    />,
  );

  return {
    skipToPreviousButton: screen.getByTestId('skip-to-previous'),
    playButton: screen.getByTestId('play'),
    skipToNext: screen.getByTestId('skip-to-next'),
  };
}
describe('PlayerButtons', () => {
  it('render component correctly', () => {
    const {skipToNext, playButton, skipToPreviousButton} = customRender();

    expect(skipToNext).toBeTruthy();
    expect(playButton).toBeTruthy();
    expect(skipToPreviousButton).toBeTruthy();
  });

  it('should be dispatch skip to previous correctly', () => {
    const spySkipToPrevious = jest.spyOn(audioTracker, 'skipToPrevious');
    const {skipToPreviousButton} = customRender();

    fireEvent.press(skipToPreviousButton);

    expect(spySkipToPrevious).toHaveBeenCalled();
  });

  it('should be dispatch skip to next correctly', () => {
    const spySkipToNext = jest.spyOn(audioTracker, 'skipToNext');
    const {skipToNext} = customRender();

    fireEvent.press(skipToNext);

    expect(spySkipToNext).toHaveBeenCalled();
  });

  it('should be dispatch player actions by player status', () => {
    const render1 = customRender();

    fireEvent.press(render1.playButton);

    expect(mockOnPause).toHaveBeenCalled();

    const render2 = customRender('pause');

    fireEvent.press(render2.playButton);
    expect(mockOnPlay).toHaveBeenCalled();
  });
});
