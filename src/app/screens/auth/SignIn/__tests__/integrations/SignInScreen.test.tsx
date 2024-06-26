import React from 'react';

import {AuthStack} from '@router';
import {act, fireEvent, renderScreen, screen, server, waitFor} from '@test';

function customRenderScreen() {
  renderScreen(<AuthStack initialRouteName="SignInScreen" />);

  return {
    inputEmail: screen.getByPlaceholderText('Email'),
    inputPassword: screen.getByPlaceholderText('Password'),
    checkBoxElement: screen.getByTestId('checkbox'),
    buttonLogin: screen.getByText('Login'),
    buttonRedirectSignUp: screen.getByText('Register'),
  };
}

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
});

const validEmail = 'johnDoe@gmail.com';
const invalidEmail = 'johnD.com';
const emailErrorMessage = 'Email not valid.';

const validPassword = 'johnDoe123';
const invalidPassword = 'doe1';
const passwordErrorMessage = 'Password too short.';

describe('SignInScreen', () => {
  it('should render screen correctly', () => {
    const {
      inputEmail,
      buttonLogin,
      buttonRedirectSignUp,
      checkBoxElement,
      inputPassword,
    } = customRenderScreen();

    expect(inputEmail).toBeTruthy();
    expect(buttonLogin).toBeTruthy();
    expect(buttonRedirectSignUp).toBeTruthy();
    expect(checkBoxElement).toBeTruthy();
    expect(inputPassword).toBeTruthy();
  });

  it('should be render errors message for wrong field values.', async () => {
    const {inputEmail, buttonLogin, inputPassword} = customRenderScreen();

    fireEvent.changeText(inputEmail, invalidEmail);
    fireEvent.changeText(inputPassword, invalidPassword);

    fireEvent.press(buttonLogin);

    const emailErrorText = await screen.findByText(emailErrorMessage);
    const passwordErrorText = await screen.findByText(passwordErrorMessage);

    expect(emailErrorText).toBeTruthy();
    expect(passwordErrorText).toBeTruthy();
  });
  it('should be change form values.', async () => {
    const {inputEmail, inputPassword} = customRenderScreen();

    fireEvent.changeText(inputEmail, validEmail);
    fireEvent.changeText(inputPassword, validPassword);

    expect(inputEmail.props.value).toEqual(validEmail);
    expect(inputPassword.props.value).toEqual(validPassword);
  });

  test('should be redirect to sign up screen.', async () => {
    const {buttonRedirectSignUp} = customRenderScreen();

    fireEvent.press(buttonRedirectSignUp);

    expect(screen.getByText('Register')).toBeTruthy();
  });
  test('remind access data.', async () => {
    const {checkBoxElement} = customRenderScreen();

    fireEvent.press(checkBoxElement);
    const iconCheck = screen.getByTestId('icon-checked');

    expect(iconCheck).toBeTruthy();

    fireEvent.press(checkBoxElement);

    const iconUnChecked = screen.queryByText('icon-checked');
    expect(iconUnChecked).toBeNull();
  });

  it('should be send login data successfully', async () => {
    const {inputEmail, inputPassword, buttonLogin} = customRenderScreen();

    const SUCCESS_MESSAGE = 'Success!';
    fireEvent.changeText(inputEmail, 'johnDoe@gmail.com');
    fireEvent.changeText(inputPassword, 'johnDoe555');

    fireEvent.press(buttonLogin);

    await waitFor(() => screen.getByTestId('toast'));
    await waitFor(() => screen.getByText(SUCCESS_MESSAGE));

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast')).toBeNull();

    expect(screen.getByText('Find what you are looking for')).toBeTruthy();
  });

  it('should be send login data wrong credentials', async () => {
    const {inputEmail, inputPassword, buttonLogin} = customRenderScreen();

    const ERROR_MESSAGE = 'Invalid email or password.';
    fireEvent.changeText(inputEmail, 'johnDoe111@gmail.com');
    fireEvent.changeText(inputPassword, 'johnDoe99999');

    fireEvent.press(buttonLogin);

    await waitFor(() => screen.getByTestId('toast'));
    await waitFor(() => screen.getByText(ERROR_MESSAGE));

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast')).toBeNull();
  });

  it('should be navigate to Error screen', async () => {
    const {inputEmail, buttonLogin, inputPassword} = customRenderScreen();

    fireEvent.changeText(inputEmail, 'error@gmail.com');
    fireEvent.changeText(inputPassword, 'johnDoe555');

    await act(async () => {
      await fireEvent.press(buttonLogin);
    });

    await waitFor(() =>
      expect(screen.getByText('Ops, Something Went Wrong')).toBeTruthy(),
    );
  });
});
