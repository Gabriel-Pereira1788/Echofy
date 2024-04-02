// import {useAuthContext} from '@providers';
import {signUpDTO, signUpWrongDTO} from '@mocks';
import {
  authCredentialsMock,
  mockRefreshCredentials,
  renderHook,
  server,
  waitFor,
} from '@test';

import {useAuthSignUp} from '..';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
});
describe('useAuthSignUp', () => {
  test('run sign in routine correctly', async () => {
    const mockedOnSuccess = jest.fn();
    const {result} = renderHook(() =>
      useAuthSignUp({
        onSuccess: mockedOnSuccess,
      }),
    );
    result.current.signUp(signUpDTO);
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
    expect(mockRefreshCredentials).toHaveBeenCalledWith(authCredentialsMock);
    expect(mockedOnSuccess).toHaveBeenCalledWith(authCredentialsMock);
  });

  test('trigger error message correctly.', async () => {
    const mockedOnError = jest.fn();
    const {result} = renderHook(() =>
      useAuthSignUp({
        onError: mockedOnError,
      }),
    );
    result.current.signUp(signUpWrongDTO);
    await waitFor(() => expect(result.current.isSuccess).toBeFalsy());
    expect(mockedOnError).toHaveBeenCalledWith({
      message: 'Something is wrong, try again later.',
      status: 404,
    });
  });
});
