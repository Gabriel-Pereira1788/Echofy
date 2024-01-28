import React from 'react';

import {
  act,
  authCredentialsAPIMock,
  fireEvent,
  renderScreen,
  screen,
  server,
  waitFor,
} from '@test';

import {SignUpScreen} from '../../SignUpScreen';

const navigation: any = {
  pop: jest.fn(),
  navigate: jest.fn(),
};
function customRenderScreen() {
  renderScreen(<SignUpScreen navigation={navigation} route={{} as any} />);

  return {
    inputEmail: screen.getByPlaceholderText('Email'),
    inputPassword: screen.getByPlaceholderText('Password'),
    inputDateBirth: screen.getByPlaceholderText('Date of Birth'),
    buttonSignUp: screen.getByText('Sign Up'),
    buttonCancel: screen.getByText('Cancel'),
  };
}

const validBirthDate = '21/12/2001';
const invalidBirthDate = '12/';
const birthDateErrorMessage = 'Incorrect birth date.';

const validEmail = 'johnDoe@gmail.com';
const invalidEmail = 'johnD.com';
const emailErrorMessage = 'Email not valid.';

const validPassword = 'johnDoe123';
const invalidPassword = 'doe1';
const passwordErrorMessage = 'Password too short.';

beforeAll(() => {
  jest.useFakeTimers();
  server.listen();
});

afterAll(() => {
  server.close();
});

describe('SignUp', () => {
  it('should be render screen correctly', () => {
    const {
      inputEmail,
      inputPassword,
      inputDateBirth,
      buttonSignUp,
      buttonCancel,
    } = customRenderScreen();

    expect(inputEmail).toBeTruthy();
    expect(inputPassword).toBeTruthy();
    expect(inputDateBirth).toBeTruthy();
    expect(buttonSignUp).toBeTruthy();
    expect(buttonCancel).toBeTruthy();
  });

  it('should be go back to SignIn Screen.', () => {
    const {buttonCancel} = customRenderScreen();

    fireEvent.press(buttonCancel);

    expect(navigation.pop).toHaveBeenCalled();
  });

  it('should render errors message for wrong field values.', async () => {
    const {inputEmail, buttonSignUp, inputPassword, inputDateBirth} =
      customRenderScreen();

    fireEvent.changeText(inputEmail, invalidEmail);
    fireEvent.changeText(inputPassword, invalidPassword);
    fireEvent.changeText(inputDateBirth, invalidBirthDate);
    fireEvent.press(buttonSignUp);

    const emailErrorText = await screen.findByText(emailErrorMessage);
    const passwordErrorText = await screen.findByText(passwordErrorMessage);
    const birdhTadeErrorMessage = await screen.findByText(
      birthDateErrorMessage,
    );
    expect(emailErrorText).toBeTruthy();
    expect(passwordErrorText).toBeTruthy();
    expect(birdhTadeErrorMessage).toBeTruthy();
  });

  it('should change form values.', async () => {
    const {inputEmail, inputPassword, inputDateBirth} = customRenderScreen();

    fireEvent.changeText(inputEmail, validEmail);
    fireEvent.changeText(inputPassword, validPassword);
    fireEvent.changeText(inputDateBirth, validBirthDate);

    expect(inputEmail.props.value).toEqual(validEmail);
    expect(inputPassword.props.value).toEqual(validPassword);
    expect(inputDateBirth.props.value).toEqual(validBirthDate);
  });

  it('should send sign up data succesfully.', async () => {
    const {inputEmail, inputPassword, inputDateBirth, buttonSignUp} =
      customRenderScreen();

    const SUCCESS_MESSAGE = 'Registered successfully.';
    fireEvent.changeText(inputEmail, validEmail);
    fireEvent.changeText(inputPassword, validPassword);
    fireEvent.changeText(inputDateBirth, validBirthDate);

    fireEvent.press(buttonSignUp);

    await waitFor(() => expect(screen.getByTestId('toast')));
    await waitFor(() => expect(screen.getByText(SUCCESS_MESSAGE)));

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast')).toBeNull();
    expect(navigation.navigate).toHaveBeenCalledWith('WelcomeScreen', {
      uid: authCredentialsAPIMock.id,
    });
  });
});
