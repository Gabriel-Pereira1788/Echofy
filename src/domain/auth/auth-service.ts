import {authAdapter} from './auth-adapter';
import {authApi} from './auth-api';
import {AuthSignInDTO, AuthSignUpDTO} from './auth-types';

async function signIn(data: AuthSignInDTO) {
  const result = await authApi.signIn(data);

  const ac = authAdapter.toAuthCredentials(result);

  return ac;
}

async function signUp(data: AuthSignUpDTO) {
  const result = await authApi.signUp(data);

  const ac = authAdapter.toAuthCredentials(result);

  return ac;
}

export const authService = {
  signIn,
  signUp,
};
