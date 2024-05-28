import React from 'react';

import {audioTracker} from '@infra';
import {AppStack} from '@router';
import {
  act,
  fireEvent,
  fireGestureHandler,
  renderScreen,
  screen,
  sectionBooksMock,
  server,
  waitFor,
} from '@test';
import {PanGesture, State} from 'react-native-gesture-handler';

jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
  jest.useRealTimers();
  jest.resetAllMocks();
});

async function customRenderScreen() {
  renderScreen(<AppStack initialRouteName="AppTabNavigator" />);

  //1)Select book item
  const bookItens = await screen.findAllByTestId('book-item');
  fireEvent.press(bookItens[0]);

  const bookData = sectionBooksMock[0].books[0];
  await screen.findByText(bookData.bookTitle);

  //2)Play audio
  const playAudioElement = await screen.findByText('Play Audio');

  fireEvent.press(playAudioElement);

  //3) render minimize player and press
  const minimizePlayerElement = await screen.findByTestId('minimize-player');

  fireEvent.press(minimizePlayerElement);

  return {
    closeButton: await screen.getByTestId('close-button'),
    goBackButton: screen.getByTestId('go-back-player-controller'),
    changeVolumeButton: screen.getByText('Volume'),
    changeSpeedControlButton: screen.getByText(/speed 1/i),
    chapterControlButton: screen.getByText(/chapter 1/i),
    bookTitlesElements: screen.getAllByText(bookData.bookTitle),
    bookAuthorElement: screen.getByText(bookData.bookAuthor),
    bookImageElement: screen.getByTestId('book-image'),
    swipeGestureElement: screen.getByTestId('pan'),
    minutesPositionElement: screen.getByTestId('minutes-position'),
    minutesDurationElement: screen.getByTestId('minutes-duration'),
    skipToPreviousButton: screen.getByTestId('skip-to-previous'),
    playButton: screen.getByTestId('play'),
    skipToNextButton: screen.getByTestId('skip-to-next'),
  };
}

describe('PlayerControllerScreen', () => {
  it('render screen correctly', async () => {
    const {
      closeButton,
      goBackButton,
      changeVolumeButton,
      changeSpeedControlButton,
      chapterControlButton,
      bookAuthorElement,
      bookTitlesElements,
      bookImageElement,
      swipeGestureElement,
      minutesPositionElement,
      minutesDurationElement,
      playButton,
      skipToNextButton,
      skipToPreviousButton,
    } = await customRenderScreen();

    expect(closeButton).toBeTruthy();
    expect(goBackButton).toBeTruthy();

    expect(changeVolumeButton).toBeTruthy();
    expect(changeSpeedControlButton).toBeTruthy();
    expect(chapterControlButton).toBeTruthy();

    expect(bookTitlesElements.length > 0).toBeTruthy();
    expect(bookAuthorElement).toBeTruthy();
    expect(bookImageElement).toBeTruthy();

    expect(swipeGestureElement).toBeTruthy();
    expect(minutesPositionElement).toBeTruthy();
    expect(minutesDurationElement).toBeTruthy();

    expect(playButton).toBeTruthy();
    expect(skipToNextButton).toBeTruthy();
    expect(skipToPreviousButton).toBeTruthy();
  });

  it('should be close track and go back to previous screen', async () => {
    const {closeButton} = await customRenderScreen();
    const spyAudioReset = jest.spyOn(audioTracker, 'reset');
    const spyAudioSetVolume = jest.spyOn(audioTracker, 'setVolume');
    act(() => {
      fireEvent.press(closeButton);
    });

    //1) call native actions correctly
    await waitFor(() => expect(spyAudioReset).toHaveBeenCalled());
    await waitFor(() => expect(spyAudioSetVolume).toHaveBeenCalled());

    //2) check render previous screen correctly
    const summaryTextElement = screen.getByTestId('summary-text');
    expect(summaryTextElement).toBeTruthy();

    //3) hide minimize player
    const minimizePlayerElement = screen.queryByTestId('minimize-player');

    expect(minimizePlayerElement).not.toBeTruthy();
  });

  it('should be press go back button and redirect to previous screen', async () => {
    const {goBackButton} = await customRenderScreen();

    act(() => {
      fireEvent.press(goBackButton);
    });

    const summaryTextElement = screen.getByTestId('summary-text');
    expect(summaryTextElement).toBeTruthy();
  });

  it('should be swipe progress bar and seek position', async () => {
    const spyAudioPause = jest.spyOn(audioTracker, 'pause');
    const spyAudioPlay = jest.spyOn(audioTracker, 'play');
    const spyAudioSeekTo = jest.spyOn(audioTracker, 'seekTo');

    const {swipeGestureElement} = await customRenderScreen();

    act(() => {
      fireEvent(swipeGestureElement, 'onBegan');
      jest.runAllTimers();
    });

    //1) pause track and render play icon.
    await waitFor(() => expect(spyAudioPause).toBeTruthy());
    const playIcon = screen.getByTestId('play-icon');
    expect(playIcon).toBeTruthy();

    //2) swipe gesture position call seekTo audio tracker event
    fireGestureHandler<PanGesture>(swipeGestureElement, [
      {state: State.BEGAN, translationX: 0},
      {state: State.ACTIVE, translationX: 10},
      {translationX: 20},
      {translationX: 20},
    ]);

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(spyAudioSeekTo).toHaveBeenCalled();
    });

    //3) verify if play audio is correctly called again
    expect(spyAudioPlay).toHaveBeenCalled();
    const pauseIcon = screen.getByTestId('pause-icon');
    expect(pauseIcon).toBeTruthy();
  });

  it('should be call play and pause functions', async () => {
    const spyAudioPause = jest.spyOn(audioTracker, 'pause');
    const spyAudioPlay = jest.spyOn(audioTracker, 'play');
    const {playButton} = await customRenderScreen();

    act(() => {
      fireEvent.press(playButton);
    });

    await waitFor(() => expect(spyAudioPause).toHaveBeenCalled());
    const playIcon = screen.getByTestId('play-icon');
    expect(playIcon).toBeTruthy();

    act(() => {
      fireEvent.press(playButton);
    });

    await waitFor(() => expect(spyAudioPlay).toHaveBeenCalled());
    const pauseIcon = screen.getByTestId('pause-icon');
    expect(pauseIcon).toBeTruthy();
  });

  it('should be call skip to previous and next track', async () => {
    const spyAudioSkipToPrev = jest.spyOn(audioTracker, 'skipToPrevious');
    const spyAudioSkipToNext = jest.spyOn(audioTracker, 'skipToNext');

    const {skipToPreviousButton, skipToNextButton} = await customRenderScreen();

    act(() => {
      fireEvent.press(skipToNextButton);
    });

    expect(spyAudioSkipToNext).toHaveBeenCalled();
    expect(screen.getByText(/chapter 2/i)).toBeTruthy();

    act(() => {
      fireEvent.press(skipToPreviousButton);
    });

    expect(spyAudioSkipToPrev).toHaveBeenCalled();
    expect(screen.getByText(/chapter 1/i)).toBeTruthy();
  });
});
