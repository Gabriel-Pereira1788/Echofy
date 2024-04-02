// import {useAuthContext} from '@providers';
import {signInDTO, signInWrongDTO} from '@mocks';
import {
  act,
  authCredentialsMock,
  mockRefreshCredentials,
  renderHook,
  server,
  waitFor,
} from '@test';

import {useAuthSignIn} from '..';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
  jest.useRealTimers();
});
describe('useAuthSignIn', () => {
  test('run sign in routine correctly', async () => {
    const mockedOnSuccess = jest.fn();
    const {result} = renderHook(() =>
      useAuthSignIn({
        onSuccess: mockedOnSuccess,
      }),
    );

    await act(() => {
      result.current.signIn(signInDTO);
    });
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
    expect(mockRefreshCredentials).toHaveBeenCalledWith(authCredentialsMock);
    expect(mockedOnSuccess).toHaveBeenCalledWith(authCredentialsMock);
  });

  test('trigger error message correctly.', async () => {
    const mockedOnError = jest.fn();
    const {result} = renderHook(() =>
      useAuthSignIn({
        onError: mockedOnError,
      }),
    );
    result.current.signIn(signInWrongDTO);
    await waitFor(() => expect(result.current.isSuccess).toBeFalsy());
    expect(mockedOnError).toHaveBeenCalledWith({
      message: 'Invalid email or password.',
      status: 404,
    });
  });
});
