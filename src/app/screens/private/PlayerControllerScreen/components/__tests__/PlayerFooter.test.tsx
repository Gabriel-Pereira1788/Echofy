import React from 'react';

import {audioTracker} from '@infra';
import {fireEvent, render, screen} from '@test';
import {act} from 'react-test-renderer';

import {PlayerFooter} from '..';
import {
  mappedNextSpeedState,
  mappedSpeedState,
} from '../../constants/mappedSpeedState';
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

    //1)change state first time for down sound
    act(() => {
      fireEvent.press(changeVolumeButton);
    });

    expect(spySetVolume).toHaveBeenCalledWith(
      mappedNextVolumeState.up.nextValue,
    );

    //2) change state second time for mute sound
    act(() => {
      fireEvent.press(changeVolumeButton);
    });

    expect(spySetVolume).toHaveBeenCalledWith(
      mappedNextVolumeState.down.nextValue,
    );

    //3) change state third time for normal sound
    act(() => {
      fireEvent.press(changeVolumeButton);
    });

    expect(spySetVolume).toHaveBeenCalledWith(
      mappedNextVolumeState.mute.nextValue,
    );
  });

  it('should be open modal chapters', () => {
    const {chapterControlButton} = customRender();

    fireEvent.press(chapterControlButton);

    expect(mockOnOpenModal).toHaveBeenCalled();
  });

  it('should be change speed state', () => {
    const spySetRate = jest.spyOn(audioTracker, 'setRate');
    const {changeSpeedControlButton} = customRender();

    //1) change state first time for speed faster
    fireEvent.press(changeSpeedControlButton);

    const speedElement1 = screen.getByText(`Speed ${mappedSpeedState.faster}x`);
    expect(spySetRate).toHaveBeenCalledWith(
      mappedNextSpeedState.normal.nextValue,
    );
    expect(speedElement1).toBeTruthy();

    //2) change state second time for speed slowly
    fireEvent.press(speedElement1);
    const speedElement2 = screen.getByText(`Speed ${mappedSpeedState.slowly}x`);
    expect(spySetRate).toHaveBeenCalledWith(
      mappedNextSpeedState.faster.nextValue,
    );
    expect(speedElement2).toBeTruthy();

    //3) change state third time for speed normal
    fireEvent.press(speedElement2);
    const speedElement3 = screen.getByText(`Speed ${mappedSpeedState.normal}x`);
    expect(spySetRate).toHaveBeenCalledWith(
      mappedNextSpeedState.slowly.nextValue,
    );
    expect(speedElement3).toBeTruthy();
  });
});
