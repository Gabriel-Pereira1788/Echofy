import React from 'react';

import {audioTracker} from '@infra';
import {AppStack} from '@router';
import {
  act,
  fireEvent,
  renderScreen,
  reviewMock,
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
  // server.resetHandlers();

  jest.useRealTimers();
  jest.resetAllMocks();
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
  };
}

describe('BookDetailsScreen', () => {
  it('should be render screen correctly', async () => {
    const {
      bookAuthor,
      bookData,
      playButtonElement,
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

    const text = summaryTextElement.props.children[0] as string;
    const expectTextResume = bookData.bookDesc.slice(0, 500) + '...';
    expect(text.length).toEqual(expectTextResume.length);
  });

  it('Flow: show review content and redirect to book review panels', async () => {
    const {} = await customRenderScreen();

    //1) Render content correctly
    const carouselContent = screen.getByTestId('carousel-content');
    expect(carouselContent).toBeTruthy();

    const carouselSelectors = screen.getAllByTestId('carousel-selector');
    expect(carouselSelectors.length).toEqual(reviewMock.docs.length);

    const viewMoreButton = screen.getByText(/view more/i);
    expect(viewMoreButton).toBeTruthy();

    //2) scroll current content display
    const eventData = {
      contentSize: {
        // Dimensions of the scrollable content
        height: 500,
        width: 2000,
      },
      layoutMeasurement: {
        // Dimensions of the device
        height: 100,
        width: 2000,
      },
    };
    //2.1) scroll to first item
    await act(() => {
      fireEvent.scroll(carouselContent, {
        nativeEvent: {
          ...eventData,
          contentOffset: {
            x: 300,
          },
        },
      });
    });

    const carouselFirstItem = carouselSelectors[0].props.children[0];
    expect(carouselFirstItem.props.backgroundColor).toEqual('carouselSelected');

    //2.2) scroll to second item
    await act(() => {
      fireEvent.scroll(carouselContent, {
        nativeEvent: {
          ...eventData,
          contentOffset: {
            x: 1000,
          },
        },
      });
    });

    const carouselSecondItem = carouselSelectors[1].props.children[0];
    expect(carouselSecondItem.props.backgroundColor).toEqual(
      'carouselSelected',
    );

    //2.3) scroll to third item
    await act(() => {
      fireEvent.scroll(carouselContent, {
        nativeEvent: {
          ...eventData,
          contentOffset: {
            x: 1500,
          },
        },
      });
    });

    const carouselThirdItem = carouselSelectors[2].props.children[0];
    expect(carouselThirdItem.props.backgroundColor).toEqual('carouselSelected');

    //3) Redirect to book review panels screen
    fireEvent.press(viewMoreButton);
    const reviewsList = await screen.findByTestId('reviews-list');

    expect(reviewsList).toBeTruthy();
  });

  it('Flow: render minimize player , redirect to Player controler screen and run play and pause functions', async () => {
    const {playButtonElement, bookTitle} = await customRenderScreen();

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
      jest.runAllTimers();
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

    //6 go back to details book screen
    act(() => {
      fireEvent.press(goBackButton);
    });
    expect(bookTitle).toBeTruthy();
  });
});
