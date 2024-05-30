import React from 'react';

import {bookMockApi, fireEvent, render, screen, server} from '@test';

import {HomeScreenCarousel} from '../HomeScreenCarousel';

async function customRender() {
  render(<HomeScreenCarousel identify="recommended-for-you" />);

  const bookItens = await screen.findAllByTestId('book-item');
  const carouselElement = screen.getByTestId('carousel');
  return {bookItens, carouselElement};
}

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});
describe('HomeScreenCarousel', () => {
  it('should be render component correctly', async () => {
    const {bookItens, carouselElement} = await customRender();

    expect(bookItens.length).toEqual(bookMockApi.docs.length);
    expect(carouselElement).toBeTruthy();
  });

  it('should be animated and elevate element correctly', async () => {
    const {carouselElement} = await customRender();

    const animatedBookItens = screen.getAllByTestId('animated-book-item');
    const currentTranslateValue = 50;
    const newTranslateValue = 100;

    const previousTranslateY =
      animatedBookItens[0].props.style.transform[0].translateY;

    expect(previousTranslateY).toEqual(currentTranslateValue);

    fireEvent.scroll(carouselElement, {
      nativeEvent: {
        contentSize: {height: 600, width: 400},
        contentOffset: {y: 0, x: 300},
        layoutMeasurement: {height: 100, width: 100}, // Dimensions of the device
      },
    });

    const newTranslateY =
      animatedBookItens[0].props.style.transform[0].translateY;

    expect(newTranslateY).toEqual(newTranslateValue);
  });
});
