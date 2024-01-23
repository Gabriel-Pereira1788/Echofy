import React from 'react';

import {act, fireEvent, renderScreen, screen, server, waitFor} from '@test';

import {SignInScreen} from '../../SignInScreen';

const navigation: any = {
  navigate: jest.fn(),
};

function customRenderScreen() {
  renderScreen(<SignInScreen navigation={navigation} route={{} as any} />);

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

  it('should render errors message for wrong field values.', async () => {
    const {inputEmail, buttonLogin, inputPassword} = customRenderScreen();

    fireEvent.changeText(inputEmail, invalidEmail);
    fireEvent.changeText(inputPassword, invalidPassword);

    fireEvent.press(buttonLogin);

    const emailErrorText = await screen.findByText(emailErrorMessage);
    const passwordErrorText = await screen.findByText(passwordErrorMessage);

    expect(emailErrorText).toBeTruthy();
    expect(passwordErrorText).toBeTruthy();
  });
  it('should change form values.', async () => {
    const {inputEmail, inputPassword} = customRenderScreen();

    fireEvent.changeText(inputEmail, validEmail);
    fireEvent.changeText(inputPassword, validPassword);

    expect(inputEmail.props.value).toEqual(validEmail);
    expect(inputPassword.props.value).toEqual(validPassword);
  });

  test('should redirect to sign up screen.', async () => {
    const {buttonRedirectSignUp} = customRenderScreen();

    fireEvent.press(buttonRedirectSignUp);

    expect(navigation.navigate).toHaveBeenCalledWith('SignUpScreen');
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

  it('should send login data successfully', async () => {
    const {inputEmail, inputPassword, buttonLogin} = customRenderScreen();

    const SUCCESS_MESSAGE = 'Welcome user!';
    fireEvent.changeText(inputEmail, 'johnDoe@gmail.com');
    fireEvent.changeText(inputPassword, 'johnDoe555');

    fireEvent.press(buttonLogin);

    await waitFor(() => screen.getByTestId('toast'));
    await waitFor(() => screen.getByText(SUCCESS_MESSAGE));

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast')).toBeNull();
  });

  it('should send login data wrong credentials', async () => {
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
});
