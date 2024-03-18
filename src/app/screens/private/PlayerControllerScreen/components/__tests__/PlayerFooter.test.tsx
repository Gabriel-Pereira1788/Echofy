import React from 'react';

import {audioTracker} from '@infra';
import {fireEvent, render, screen} from '@test';
import {act} from 'react-test-renderer';

import {PlayerFooter} from '..';
import {mappedNextVolumeState} from '../../constants/mappedVolumeState';

const mockOnOpenModal = jest.fn();
function customRender() {
  render(<PlayerFooter onOpenModal={mockOnOpenModal} />);

  return {
    changeVolumeButton: screen.getByText('Volume'),
    changeSpeedControlButton: screen.getByText(/speed 1/i),
    chapterControlButton: screen.getByText(/chapter 1/i),
  };
}
describe('PlayerFooter', () => {
  it('render component correctly', () => {
    const {changeSpeedControlButton, changeVolumeButton, chapterControlButton} =
      customRender();

    expect(changeSpeedControlButton).toBeTruthy();
    expect(changeVolumeButton).toBeTruthy();
    expect(chapterControlButton).toBeTruthy();
  });

  it('should be change volume state', () => {
    const spySetVolume = jest.spyOn(audioTracker, 'setVolume');
    const {changeVolumeButton} = customRender();

    act(() => {
      fireEvent.press(changeVolumeButton);
    });

    expect(spySetVolume).toHaveBeenCalledWith(
      mappedNextVolumeState.up.nextValue,
    );

    act(() => {
      fireEvent.press(changeVolumeButton);
    });

    expect(spySetVolume).toHaveBeenCalledWith(
      mappedNextVolumeState.down.nextValue,
    );

    act(() => {
      fireEvent.press(changeVolumeButton);
    });

    expect(spySetVolume).toHaveBeenCalledWith(
      mappedNextVolumeState.mute.nextValue,
    );
  });
});
