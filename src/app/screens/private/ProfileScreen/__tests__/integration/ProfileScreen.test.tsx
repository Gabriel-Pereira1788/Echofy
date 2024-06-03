import React from 'react';

import {AppStack} from '@router';
import {
  act,
  authCredentialsMock,
  fireEvent,
  renderScreen,
  screen,
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
  jest.resetAllMocks();
});

async function customRenderScreen() {
  renderScreen(<AppStack initialRouteName="AppTabNavigator" />);

  //1) render screen
  const settingsButton = await screen.findByTestId('profile-button');

  //2) navigate to settings screen
  await act(() => {
    fireEvent.press(settingsButton);
  });
  //3) navigate to profile screen
  const viewProfileButton = screen.getByText('View Profile');
  fireEvent.press(viewProfileButton);

  return {
    saveButton: screen.getByText('Save'),
    editProfileButton: screen.getByTestId('edit-profile-image'),
    headerTitleElement: screen.getByText('Profile'),
    nameElement: screen.getByText(authCredentialsMock.name),
    emailElement: screen.getByText(authCredentialsMock.email),
    dateBirthElement: screen.getByText(authCredentialsMock.birthDate),

    profileImageElement: screen.getByTestId('profile-image'),
  };
}

describe('ProfileScreen', () => {
  it('should be render component correctly', async () => {
    const {
      editProfileButton,
      headerTitleElement,
      saveButton,
      dateBirthElement,
      emailElement,
      nameElement,
      profileImageElement,
    } = await customRenderScreen();

    expect(editProfileButton).toBeTruthy();
    expect(headerTitleElement).toBeTruthy();
    expect(saveButton).toBeTruthy();
    expect(nameElement).toBeTruthy();
    expect(emailElement).toBeTruthy();
    expect(dateBirthElement).toBeTruthy();

    expect(profileImageElement).toBeTruthy();
  });

  it('should be change profile image', async () => {
    const {profileImageElement, editProfileButton} = await customRenderScreen();

    await act(async () => {
      await fireEvent.press(editProfileButton);
    });

    await waitFor(() =>
      expect(profileImageElement.props.source.uri).toEqual('file://file.jpg'),
    );
  });

  it('Flow: should be change profile image and save changes', async () => {
    const SUCCESS_MESSAGE = 'Success!';
    const {editProfileButton, saveButton} = await customRenderScreen();

    //1) change profile image
    await act(async () => {
      await fireEvent.press(editProfileButton);
    });

    //2) call save changes
    await fireEvent.press(saveButton);

    //3) show toast success message
    await waitFor(() => screen.getByTestId('toast'));
    await waitFor(() => screen.getByText(SUCCESS_MESSAGE));

    //4) close toast
    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByTestId('toast')).toBeNull();
  });
});
