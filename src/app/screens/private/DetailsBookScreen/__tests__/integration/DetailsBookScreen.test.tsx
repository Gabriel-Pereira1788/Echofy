import React from 'react';

import {audioTracker} from '@infra';
import {AppStack} from '@router';
import {
  act,
  fireEvent,
  renderScreen,
  screen,
  sectionBooksMock,
  server,
  waitFor,
} from '@test';

jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
  jest.useRealTimers();
});

afterEach(() => {
  server.resetHandlers();
});

async function customRenderScreen() {
  renderScreen(<AppStack initialRouteName="AppTabNavigator" />);
  const bookItens = await screen.findAllByTestId('book-item');
  fireEvent.press(bookItens[0]);

  const bookData = sectionBooksMock[0].books[0];
  await screen.findByText(bookData.bookTitle);
  const imageCover = await screen.findByTestId('book-image');

  return {
    bookData,
    imageCover,
    bookTitle: screen.getByText(bookData.bookTitle),
    bookAuthor: screen.getByText(bookData.bookAuthor),
    bookCategories: screen.getAllByTestId('category-book-item'),
    summaryTextElement: screen.getByTestId('summary-text'),
    playButtonElement: screen.getByText(/play audio/i),
    readButtonElement: screen.getByText(/read book/i),
  };
}

describe('DetailsBookScreen', () => {
  it('should be render screen correctly', async () => {
    const {
      bookAuthor,
      bookData,
      playButtonElement,
      readButtonElement,
      bookCategories,
      bookTitle,
      imageCover,
      summaryTextElement,
    } = await customRenderScreen();

    expect(bookAuthor).toBeTruthy();
    expect(bookCategories).toBeTruthy();
    expect(bookTitle).toBeTruthy();
    expect(imageCover).toBeTruthy();
    expect(playButtonElement).toBeTruthy();
    expect(readButtonElement).toBeTruthy();
    const text = summaryTextElement.props.children[0] as string;
    const expectTextResume = bookData.bookDesc.slice(0, 500) + '...';
    expect(text.length).toEqual(expectTextResume.length);
  });

  it('Flow: redirect to ReadBookScreen', async () => {
    const {readButtonElement} = await customRenderScreen();

    //1) press readButtonElement
    act(() => {
      fireEvent.press(readButtonElement);
    });

    //2) check if render read book screen correctly
    const headerTitleElement = screen.getByText('Read Book Screen');
    expect(headerTitleElement).toBeTruthy();
  });
  it('Flow: render minimize player , redirect to Player controler screen and run play and pause functions', async () => {
    const {playButtonElement} = await customRenderScreen();

    act(() => {
      fireEvent.press(playButtonElement);
      jest.runAllTimers();
    });
    //1) render minimize player element
    const minimizePlayerElement = await screen.findByTestId('minimize-player');
    expect(minimizePlayerElement).toBeTruthy();

    //2)Redirect to Player controller screen

    act(() => {
      fireEvent.press(minimizePlayerElement);
    });

    //3) check if render correctly
    const closeButton = screen.getByTestId('close-button');
    const goBackButton = screen.getByTestId('go-back-player-controller');
    const playButton = screen.getByTestId('play');

    expect(closeButton).toBeTruthy();
    expect(goBackButton).toBeTruthy();
    expect(playButton).toBeTruthy();

    const spyAudioPause = jest.spyOn(audioTracker, 'pause');
    const spyAudioPlay = jest.spyOn(audioTracker, 'play');

    //4 run play function
    act(() => {
      fireEvent.press(playButton);
    });

    await waitFor(() => expect(spyAudioPause).toHaveBeenCalled());
    const playIcon = screen.getByTestId('play-icon');
    expect(playIcon).toBeTruthy();

    //5 run pause function
    act(() => {
      fireEvent.press(playButton);
    });

    await waitFor(() => expect(spyAudioPlay).toHaveBeenCalled());
    const pauseIcon = screen.getByTestId('pause-icon');
    expect(pauseIcon).toBeTruthy();
  });
});
