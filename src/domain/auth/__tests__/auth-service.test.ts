import {signInDTO, signInWrongDTO, signUpDTO} from '@mocks';
import {server} from '@test';
import {AxiosError} from 'axios';

import {authService} from '../auth-service';

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

describe('auth-service', () => {
  it('should by sign in user and return credentials', async () => {
    const ac = await authService.signIn(signInDTO);

    expect(ac.id).toBeTruthy();
  });

  it('should by sign in user with invalid credentials', async () => {
    try {
      const ac = await authService.signIn(signInWrongDTO);

      expect(ac.id).toBeTruthy();
    } catch (error) {
      const Error = error as AxiosError;
      expect(Error.response?.status === 404).toBeTruthy();
    }
  });

  it('should by sign up user and return credentials', async () => {
    const ac = await authService.signUp(signUpDTO);

    expect(ac.id).toBeTruthy();
  });
});
