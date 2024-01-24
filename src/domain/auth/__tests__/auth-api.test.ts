import {signInDTO, signUpDTO} from '@mocks';
import {server} from '@test';
import {AxiosError} from 'axios';

import {authApi} from '../auth-api';

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

describe('auth-api', () => {
  it('should be send request http and return sing in credentials valid', async () => {
    const ac = await authApi.signIn(signInDTO);

    expect(ac.isValid).toBeTruthy();
  });

  it('should be send request http with invalid credentials and return error', async () => {
    try {
      signInDTO.email = 'johnDoe123@gmail.com';
      const ac = await authApi.signIn(signInDTO);

      expect(ac.id).toBeTruthy();
    } catch (error) {
      const Error = error as AxiosError;
      expect(Error.response?.status === 404).toBeTruthy();
    }
  });

  it('should be send request http and return sing up credentials valid', async () => {
    const ac = await authApi.signUp(signUpDTO);

    expect(ac.id).toBeTruthy();
  });
});
