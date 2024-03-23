import React from 'react';

import {fireEvent, mockListTracks, render, screen, waitFor} from '@test';
import {act} from 'react-test-renderer';

import {ModalActions} from '@components';

import {PlayerSelectChapters} from '..';

const mockOnClose = jest.fn();
const mockOnSkipTo = jest.fn();
const mockRef = React.createRef<ModalActions>();

jest.mock('@infra', () => {
  const originalModule = jest.requireActual('@infra');

  return {
    ...originalModule,
    audioTracker: {
      getTracks: () => mockListTracks,
      setupPlayer: jest.fn(),
    },
  };
});

beforeAll(() => {
  jest.useFakeTimers();
});
function customRender() {
  render(
    <PlayerSelectChapters
      onClose={mockOnClose}
      onSkipTo={mockOnSkipTo}
      refModalActions={mockRef}
    />,
  );
  act(() => {
    mockRef.current?.show();
  });
  return {
    modalElement: screen.getByTestId('modal'),
    searchElement: screen.getByPlaceholderText(/digite aqui/i),
    closeAreaElement: screen.getByTestId('close-area'),
    listTracksElement: screen.getByTestId('list-tracks'),
    slideElement: screen.getByTestId('slide-element'),
  };
}
describe('PlayerSelectChapters', () => {
  it('render component correctly', async () => {
    const {modalElement, searchElement, closeAreaElement} = customRender();

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => expect(modalElement).toBeTruthy());
    expect(searchElement).toBeTruthy();
    expect(closeAreaElement).toBeTruthy();
  });

  it('should be render itens in flatlist', () => {
    const {listTracksElement} = customRender();

    expect(listTracksElement.props.data.length).toEqual(mockListTracks.length);
  });

  it('should be close modal', () => {
    const {closeAreaElement, slideElement, modalElement} = customRender();
    act(() => {
      fireEvent(modalElement, 'onShow');
      jest.runAllTimers();
    });

    expect(slideElement.props.style.height > 0).toBeTruthy();
    act(() => {
      fireEvent.press(closeAreaElement);
      jest.runAllTimers();
    });

    expect(slideElement.props.style.height).toEqual(0);
  });

  it('should be press chapter item and dispatch skip to function', () => {
    const {} = customRender();

    const chaptersItens = screen.getAllByTestId('chapter-item');

    fireEvent.press(chaptersItens[0]);

    expect(mockOnSkipTo).toHaveBeenCalledWith(mockListTracks[0].chapterNumber);
  });

  it('should be dispatch search chapter by text', () => {
    const {searchElement, listTracksElement} = customRender();

    const searchText = 'Chapter 2';
    act(() => {
      fireEvent.changeText(searchElement, searchText);
    });

    const filteredChapters = mockListTracks.filter(item =>
      item.title.includes(searchText),
    );

    //1) check if currently render itens is correctly
    expect(listTracksElement.props.data.length).toEqual(
      filteredChapters.length,
    );

    //2) empty text and render all chapters

    act(() => {
      fireEvent.changeText(searchElement, '');
    });

    expect(listTracksElement.props.data.length).toEqual(mockListTracks.length);
  });
});
