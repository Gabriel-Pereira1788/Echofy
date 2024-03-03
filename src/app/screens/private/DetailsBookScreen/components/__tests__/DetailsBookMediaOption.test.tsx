import React from 'react';

import {fireEvent, render, screen} from '@test';

import {DetailsBookMediaOption} from '..';

const mockPlayAudio = jest.fn();
const mockReadBook = jest.fn();

function customRender() {
  render(
    <DetailsBookMediaOption
      onPlayAudio={mockPlayAudio}
      onReadBook={mockReadBook}
    />,
  );

  return {
    playButtonElement: screen.getByText(/play audio/i),
    readButtonElement: screen.getByText(/read book/i),
  };
}
describe('DetailsBookMediaOption', () => {
  it('should be render component correctly', () => {
    const {playButtonElement, readButtonElement} = customRender();

    expect(playButtonElement).toBeTruthy();
    expect(readButtonElement).toBeTruthy();
  });

  it('should be press buttons correctly', () => {
    const {playButtonElement, readButtonElement} = customRender();

    fireEvent.press(playButtonElement);
    expect(mockPlayAudio).toHaveBeenCalled();

    fireEvent.press(readButtonElement);
    expect(mockReadBook).toHaveBeenCalled();
  });
});
