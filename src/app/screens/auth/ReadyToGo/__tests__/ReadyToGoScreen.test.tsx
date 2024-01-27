import React from 'react';

import {BookCategory} from '@domain';
import {
  act,
  authCredentialsMock,
  fireEvent,
  renderScreen,
  screen,
  server,
  waitFor,
} from '@test';

import {ReadyToGoScreen} from '../ReadyToGoScreen';

const selectedCategories: BookCategory[] = [
  {isSelected: true, text: 'Fiction'},
];
const route: any = {
  params: {
    selectedCategories,
  },
};
function customRenderScreen({
  selectedCategories,
}: {
  selectedCategories?: BookCategory[];
}) {
  if (selectedCategories) {
    route.params.selectedCategories = selectedCategories;
  }
  renderScreen(<ReadyToGoScreen navigation={{} as any} route={route} />);

  return {
    wrapperImage: screen.getByTestId('wrapper-image'),
    buttonFinish: screen.getByText('Finish'),
    titleElement: screen.getByText('You are ready to go!'),
    subtitleElement: screen.queryByText(
      'Congratulation,any interesting topics will be shortly in your hands!',
    ),
  };
}
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

describe('ReadyToGoScreen', () => {
  it('should be render component correctly', () => {
    const {wrapperImage, subtitleElement, titleElement, buttonFinish} =
      customRenderScreen({});

    expect(wrapperImage).toBeTruthy();
    expect(titleElement).toBeTruthy();
    expect(subtitleElement).toBeTruthy();
    expect(buttonFinish).toBeTruthy();
  });

  it('should not be render subtitle element if selectedCategories is empty', () => {
    const {subtitleElement} = customRenderScreen({
      selectedCategories: [],
    });

    expect(subtitleElement).toBeNull();
  });

  it('should be dispatch finish register correctly', async () => {
    const SUCCESS_MESSAGE = 'Welcome!';

    const {buttonFinish} = customRenderScreen({});
    fireEvent.press(buttonFinish);

    await waitFor(() => screen.getByTestId('toast'));
    await waitFor(() => screen.getByText(SUCCESS_MESSAGE));

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast')).toBeNull();
  });
});
