import React from 'react';

import {bookMock, fireEvent, mockedNavigate, render, screen} from '@test';

import {
  HomeScreenBookSection,
  HomeScreenBookSectionProps,
} from '../HomeScreenBookSection';

const mockSectionBooks = [bookMock, bookMock, bookMock];

type Props = {
  sectionIdentify?: HomeScreenBookSectionProps['sectionIdentify'];
};
function customRender({sectionIdentify}: Props) {
  const sectionTitle = 'Recommended for you';
  render(
    <HomeScreenBookSection
      sectionBooks={mockSectionBooks}
      sectionIdentify={
        sectionIdentify ? sectionIdentify : 'recommended-for-you'
      }
      sectionTitle={sectionTitle}
    />,
  );

  return {
    seeMoreButton: screen.getByText('See more'),
    listSectionBooks: screen.getByTestId('section-books'),
    sectionTitleElement: screen.getByText(sectionTitle),
    bookItens:
      sectionIdentify !== 'best-seller'
        ? screen.getAllByTestId('book-item')
        : screen.getAllByTestId('best-seller-card'),
  };
}

describe('HomeScreenBookSection', () => {
  it('should be render component correctly', () => {
    const {listSectionBooks, sectionTitleElement, seeMoreButton, bookItens} =
      customRender({});

    const numRenderPerBetch = 3;
    expect(sectionTitleElement).toBeTruthy();
    expect(seeMoreButton).toBeTruthy();
    expect(bookItens.length).toEqual(numRenderPerBetch);
    expect(listSectionBooks.props.data.length).toEqual(mockSectionBooks.length);
  });

  it('should be redirect to category book screen on press see more button', () => {
    const sectionIdentify: HomeScreenBookSectionProps['sectionIdentify'] =
      'adventure';

    const {seeMoreButton} = customRender({sectionIdentify});

    fireEvent.press(seeMoreButton);

    expect(mockedNavigate).toHaveBeenCalledWith('CategoryBookScreen', {
      categoryIdentify: sectionIdentify,
    });
  });

  it('should be redirect to book screen on press book item', () => {
    const sectionIdentify: HomeScreenBookSectionProps['sectionIdentify'] =
      'adventure';

    const {bookItens} = customRender({sectionIdentify});

    fireEvent.press(bookItens[0]);

    expect(mockedNavigate).toHaveBeenCalledWith('BookScreen', {
      id: bookMock.id,
    });
  });

  it('should be render best seller card screen', () => {
    const sectionIdentify: HomeScreenBookSectionProps['sectionIdentify'] =
      'best-seller';

    const {bookItens} = customRender({sectionIdentify});

    fireEvent.press(bookItens[0]);

    expect(bookItens).toBeTruthy();
    expect(mockedNavigate).toHaveBeenCalledWith('BookScreen', {
      id: bookMock.id,
    });
  });
});
