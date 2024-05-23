import React from 'react';

import {
  act,
  fireEvent,
  mockTrack,
  render,
  screen,
  server,
  waitFor,
} from '@test';

import {PlayerDownloadHandler} from '../PlayerDownloadHandler';

async function customRender() {
  render(<PlayerDownloadHandler track={mockTrack} />);

  return {
    downloadButton: await screen.findByTestId('download-button'),

    downloadActionsButton: screen.queryByTestId('download-actions-button'),
  };
}

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();

  jest.resetAllMocks();
});
describe('PlayerDownloadHandler', () => {
  it('Render component correctly', async () => {
    const {downloadButton} = await customRender();

    expect(downloadButton).toBeTruthy();
  });

  it('should be dispatch download action', async () => {
    const {downloadButton} = await customRender();
    expect(downloadButton).toBeTruthy();
    await act(async () => {
      if (downloadButton) {
        await fireEvent.press(downloadButton);
      }
    });

    await waitFor(() =>
      expect(screen.queryByTestId('download-button')).toBeFalsy(),
    );
    const progressContainer = screen.getByTestId('progress-circle-element');
    expect(progressContainer).toBeTruthy();
  });

  it('should be handler progress download', async () => {
    const {downloadButton} = await customRender();
    expect(downloadButton).toBeTruthy();
    await act(async () => {
      if (downloadButton) {
        await fireEvent.press(downloadButton);
      }
    });
    act(() => {
      jest.runAllTimers();
    });
    const progressContainer = screen.getByTestId('progress-circle-element');
    expect(progressContainer.props.progress).toEqual(0.5);
  });
  it('should be dispatch pause action', async () => {
    const {downloadButton} = await customRender();
    //1) dispatch download action
    expect(downloadButton).toBeTruthy();
    await act(() => {
      if (downloadButton) {
        fireEvent.press(downloadButton);
      }
    });

    await waitFor(() =>
      expect(screen.queryByTestId('download-button')).toBeFalsy(),
    );

    //2) check pause element is render correctly
    const toggleActionButton = screen.getByTestId('download-actions-button');
    const pauseIconElement = screen.getByTestId('pause-icon');

    expect(pauseIconElement).toBeTruthy();
    expect(toggleActionButton).toBeTruthy();

    //3) dispatch pause event

    act(() => {
      fireEvent.press(toggleActionButton);
    });

    //4) check pause icon is unmounted
    const pauseIconRemovedElement = screen.queryByTestId('pause-icon');
    expect(pauseIconRemovedElement).toBeFalsy();
  });

  it('should be dispatch play action', async () => {
    const {downloadButton} = await customRender();
    //1) dispatch download action
    expect(downloadButton).toBeTruthy();
    await act(() => {
      if (downloadButton) {
        fireEvent.press(downloadButton);
      }
    });

    await waitFor(() =>
      expect(screen.queryByTestId('download-button')).toBeFalsy(),
    );

    //2) dispatch pause event
    const toggleActionButton = screen.getByTestId('download-actions-button');

    act(() => {
      fireEvent.press(toggleActionButton);
    });

    //3) check play element is render correctly
    const playIconElement = screen.findByTestId('play-icon');
    expect(playIconElement).toBeTruthy();

    //4) dispatch resume event
    act(() => {
      fireEvent.press(toggleActionButton);
    });

    //5) check play icon is unmounted
    const playIconRemovedElement = screen.queryByTestId('play-icon');
    expect(playIconRemovedElement).toBeFalsy();
  });
});
