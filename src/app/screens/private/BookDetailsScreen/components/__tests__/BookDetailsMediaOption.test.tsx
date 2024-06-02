import React from 'react';

import {fireEvent, render, screen} from '@test';

import {BookDetailsMediaOption} from '..';

const mockPlayAudio = jest.fn();

function customRender() {
  render(<BookDetailsMediaOption onPlayAudio={mockPlayAudio} />);

  return {
    playButtonElement: screen.getByText(/play audio/i),
  };
}
describe('BookDetailsMediaOption', () => {
  it('should be render component correctly', () => {
    const {playButtonElement} = customRender();

    expect(playButtonElement).toBeTruthy();
  });

  it('should be press buttons correctly', () => {
    const {playButtonElement} = customRender();

    fireEvent.press(playButtonElement);
    expect(mockPlayAudio).toHaveBeenCalled();
  });
});
