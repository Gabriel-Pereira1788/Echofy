import React from 'react';

import {createCommonStackNavigator} from '@router';
import {
  act,
  authCredentialsMock,
  bookMockApi,
  fireEvent,
  renderScreen,
  screen,
  server,
} from '@test';

const mockUid = authCredentialsMock.id;
jest.mock('@providers', () => {
  const originalModule = jest.requireActual('@providers');
  return {
    ...originalModule,
    useAuthContext: () => ({
      uid: mockUid,
    }),
  };
});

jest.unmock('@react-navigation/native');
beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
});

const TestCommonStack = createCommonStackNavigator(
  () => <></>,
  'CategoryBookScreen',
);
function customRender() {
  renderScreen(<TestCommonStack />);

  const categoryTitle = /recommended for you/i;
  return {
    titleScreenElement: screen.getByText(categoryTitle),
    goBackElement: screen.getByTestId('go-back'),
  };
}
describe('CategoryBookScreen', () => {
  it('should be render component correctly', async () => {
    const {titleScreenElement} = customRender();

    const allBookItens = await screen.findAllByTestId('category-book-item');
    expect(allBookItens.length).toEqual(bookMockApi.docs.length);
    expect(titleScreenElement).toBeTruthy();
  });

  it('should be get more itens if scroll is ended', async () => {
    const {} = customRender();

    const flatListElement = await screen.findByTestId('flatlist-book-itens');

    await act(() => {
      fireEvent(flatListElement, 'onEndReached');
    });
    const allBookItens = await screen.findAllByTestId('category-book-item');
    expect(allBookItens.length).toEqual(bookMockApi.docs.length * 2);
  });

  it('Flow: select book item', async () => {
    const {} = customRender();

    const allBookItens = await screen.findAllByTestId('category-book-item');
    expect(allBookItens.length).toEqual(bookMockApi.docs.length);
    //1) select book item and redirect to book screen
    fireEvent.press(allBookItens[0]);

    //2) check if render book correctly
    const bookTitleElement = await screen.findByText(
      bookMockApi.docs[0].book_title,
    );

    expect(bookTitleElement).toBeTruthy();

    //3) return to category book screen
    const goBackButton = screen.getByTestId('go-back');
    fireEvent.press(goBackButton);

    //4 check if return correctly
    const reRenderBookItens = await screen.findAllByTestId(
      'category-book-item',
    );
    expect(reRenderBookItens.length).toEqual(bookMockApi.docs.length);
  });
});
