import React from 'react';

import {
  bookMock,
  bookMockApi,
  fireEvent,
  mockedNavigate,
  render,
  screen,
  server,
} from '@test';

import {
  HomeScreenBookSection,
  HomeScreenBookSectionProps,
} from '../HomeScreenBookSection';

type Props = {
  sectionIdentify?: HomeScreenBookSectionProps['sectionIdentify'];
  sectionTitle?: string;
};

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
  jest.useRealTimers();
  jest.resetAllMocks();
});
async function customRender({
  sectionIdentify,
  sectionTitle = 'Recommended for you',
}: Props) {
  render(
    <HomeScreenBookSection
      sectionIdentify={
        sectionIdentify ? sectionIdentify : 'recommended-for-you'
      }
      sectionTitle={sectionTitle}
    />,
  );

  const bookItens =
    sectionIdentify && sectionIdentify === 'best-seller'
      ? await screen.findAllByTestId('best-seller-card')
      : await screen.findAllByTestId('book-item');

  return {
    seeMoreButton: screen.getByText('See more'),
    listSectionBooks: screen.getByTestId('section-books'),
    sectionTitleElement: screen.getByText(sectionTitle),
    bookItens,
  };
}

describe('HomeScreenBookSection', () => {
  it('should be render component correctly', async () => {
    const {listSectionBooks, sectionTitleElement, seeMoreButton, bookItens} =
      await customRender({});

    const numRenderPerBetch = 3;
    expect(sectionTitleElement).toBeTruthy();
    expect(seeMoreButton).toBeTruthy();
    expect(bookItens.length).toEqual(numRenderPerBetch);
    expect(listSectionBooks.props.data.length).toEqual(bookMockApi.docs.length);
  });

  it('should be redirect to category book screen on press see more button', async () => {
    const sectionIdentify: HomeScreenBookSectionProps['sectionIdentify'] =
      'adventure';
    const sectionTitle = 'Adventure';
    const {seeMoreButton} = await customRender({sectionIdentify, sectionTitle});

    fireEvent.press(seeMoreButton);

    expect(mockedNavigate).toHaveBeenCalledWith('CategoryBookScreen', {
      categoryIdentify: sectionIdentify,
      categoryTitle: sectionTitle,
    });
  });

  it('should be redirect to book screen on press book item', async () => {
    const sectionIdentify: HomeScreenBookSectionProps['sectionIdentify'] =
      'adventure';

    const {bookItens} = await customRender({sectionIdentify});

    fireEvent.press(bookItens[0]);

    expect(mockedNavigate).toHaveBeenCalledWith('BookDetailsScreen', {
      id: bookMock.id,
    });
  });

  it('should be render best seller card screen', async () => {
    const sectionIdentify: HomeScreenBookSectionProps['sectionIdentify'] =
      'best-seller';

    const {bookItens} = await customRender({sectionIdentify});

    fireEvent.press(bookItens[0]);

    expect(bookItens).toBeTruthy();
    expect(mockedNavigate).toHaveBeenCalledWith('BookDetailsScreen', {
      id: bookMock.id,
    });
  });
});
