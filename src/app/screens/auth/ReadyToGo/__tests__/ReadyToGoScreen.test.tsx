import React from 'react';

import {BookCategory} from '@domain';
import {
  act,
  fireEvent,
  mockRefreshCredentials,
  renderScreen,
  screen,
  server,
  waitFor,
} from '@test';

import {ReadyToGoScreen} from '../ReadyToGoScreen';

const selectedCategories: BookCategory[] = [
  {isSelected: true, text: 'fiction'},
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
    const SUCCESS_MESSAGE = 'Registration completed successfully!';

    const {buttonFinish} = customRenderScreen({});
    fireEvent.press(buttonFinish);

    await waitFor(() => screen.getByTestId('toast'));
    await waitFor(() => screen.getByText(SUCCESS_MESSAGE));

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast')).toBeNull();
    expect(mockRefreshCredentials).toHaveBeenCalled();
  });
});
