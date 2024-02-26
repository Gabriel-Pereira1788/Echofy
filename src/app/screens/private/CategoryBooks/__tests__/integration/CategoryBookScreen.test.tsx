import React from 'react';

import {
  act,
  authCredentialsMock,
  bookMockApi,
  fireEvent,
  mockedGoBack,
  mockedNavigate,
  renderScreen,
  screen,
  server,
} from '@test';

import {CategoryBookScreen} from '../../CategoryBookScreen';

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
beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
});

const route = {
  params: {
    categoryIdentify: 'adventure',
    categoryTitle: 'Adventure',
  },
};

function customRender() {
  renderScreen(
    <CategoryBookScreen navigation={{} as any} route={route as any} />,
  );

  return {
    titleScreenElement: screen.getByText(route.params.categoryTitle),
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

  it('should be redirect to book screen', async () => {
    const {} = customRender();

    const allBookItens = await screen.findAllByTestId('category-book-item');

    fireEvent.press(allBookItens[0]);

    expect(mockedNavigate).toHaveBeenCalledWith('BookScreen', {
      id: bookMockApi.docs[0].id,
    });
  });

  it('dispatch go back screen', async () => {
    const {goBackElement} = customRender();

    fireEvent.press(goBackElement);

    expect(mockedGoBack).toHaveBeenCalled();
  });
});
