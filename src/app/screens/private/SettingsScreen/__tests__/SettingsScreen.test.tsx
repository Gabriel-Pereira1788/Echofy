import React from 'react';

import {database} from '@database';
import {AppStack} from '@router';
import {act, authCredentialsMock, fireEvent, renderScreen, screen} from '@test';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
  jest.resetAllMocks();
});
function customRenderScreen() {
  renderScreen(<AppStack initialRouteName="SettingsScreen" />);

  return {
    viewProfileButton: screen.getByText('View Profile'),
    logoutButton: screen.getByText('Log out'),
    radioButtonItens: screen.getAllByTestId('radio-button-item'),
    goBackButton: screen.getByTestId('go-back'),
  };
}

describe('SettingsScreen', () => {
  it('should be render correctly', () => {
    const {viewProfileButton, logoutButton, radioButtonItens} =
      customRenderScreen();

    expect(viewProfileButton).toBeTruthy();
    expect(logoutButton).toBeTruthy();
    expect(radioButtonItens.length).toEqual(3);
  });

  it('Flow: redirect to profile screen', () => {
    const {viewProfileButton, goBackButton} = customRenderScreen();

    //1) navigate to profile screen
    fireEvent.press(viewProfileButton);

    //2) check render correctly
    expect(screen.getByText(authCredentialsMock.email)).toBeTruthy();
    expect(screen.getAllByText(authCredentialsMock.name)[0]).toBeTruthy();
    expect(screen.getByText(authCredentialsMock.birthDate)).toBeTruthy();

    //3) go back to settings screen
    fireEvent.press(goBackButton);

    //4) check if return correctly
    expect(screen.getByText('Settings')).toBeTruthy();
  });

  it('should be change theme mode', () => {
    const {radioButtonItens} = customRenderScreen();
    const enabledButton = radioButtonItens[0];
    const disabledButton = radioButtonItens[1];
    const systemButton = radioButtonItens[2];

    //1) press enabled button
    act(() => {
      fireEvent.press(enabledButton);
    });

    //2) check enabled button as selected
    const enabledButtonStyle = enabledButton.props.children[0];

    expect(enabledButtonStyle.props.borderColor).toEqual('primary50');

    //)3 press disabled button
    act(() => {
      fireEvent.press(disabledButton);
    });

    //4) check disabled button as selected
    const disabledButtonStyle = disabledButton.props.children[0];

    expect(disabledButtonStyle.props.borderColor).toEqual('primary50');
    //5) press system button

    act(() => {
      fireEvent.press(systemButton);
    });

    //6) check system button as selected
    const systemButtonStyle = systemButton.props.children[0];

    expect(systemButtonStyle.props.borderColor).toEqual('primary50');
  });

  it('Flow: sign out account and remove credentials', async () => {
    const databaseReset = jest.spyOn(database, 'reset');
    const {logoutButton} = customRenderScreen();

    act(() => {
      fireEvent.press(logoutButton);
    });

    expect(databaseReset).toHaveBeenCalled();
  });
});
