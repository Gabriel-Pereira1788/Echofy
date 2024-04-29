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
    const {readButtonElement, bookAuthor} = await customRenderScreen();

    //1) press readButtonElement
    act(() => {
      fireEvent.press(readButtonElement);
    });

    const bookData = sectionBooksMock[0].books[0];
    const bookTitle =
      bookData.bookTitle.length > 30
        ? bookData.bookTitle.slice(0, 30) + '...'
        : bookData.bookTitle;
    //2) check if render read book screen correctly
    const headerTitleElement = screen.getByText(bookTitle);
    expect(headerTitleElement).toBeTruthy();

    //3) go back to details book screen
    const goBackButton = screen.getByTestId('go-back-player-controller');
    expect(goBackButton).toBeTruthy();

    act(() => {
      fireEvent.press(goBackButton);
    });
    expect(bookAuthor).toBeTruthy();
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
    //2.1 scroll to first item
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

    //2.2 scroll to second item
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

    //2.3 scroll to third item
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

    //3 Redirect to book review panels screen
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
