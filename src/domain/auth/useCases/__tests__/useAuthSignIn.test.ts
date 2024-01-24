// import {useAuthContext} from '@providers';
import {signInDTO, signInWrongDTO} from '@mocks';
import {authCredentialsMock, renderHook, server, waitFor} from '@test';

import {useAuthSignIn} from '..';

const mockRefreshCredentials = jest.fn();
jest.mock('@providers', () => {
  const originalModule = jest.requireActual('@providers');
  return {
    ...originalModule,
    useAuthContext: () => ({
      refreshCredentials: mockRefreshCredentials,
    }),
  };
});

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});
describe('useAuthSignIn', () => {
  test('run sign in routine correctly', async () => {
    const mockedOnSuccess = jest.fn();
    const {result} = renderHook(() =>
      useAuthSignIn({
        onSuccess: mockedOnSuccess,
      }),
    );
    result.current.signIn(signInDTO);
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
