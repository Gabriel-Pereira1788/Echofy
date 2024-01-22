import {api} from '@api';

import {AuthCredentialsAPI, AuthSignInDTO, AuthSignUpDTO} from './auth-types';

async function signIn(signInDTO: AuthSignInDTO) {
  const response = await api.post<AuthCredentialsAPI>('auth/signIn', signInDTO);

  return response.data;
}

async function signUp(signUpDTO: AuthSignUpDTO) {
  const response = await api.post<AuthCredentialsAPI>('auth/signUp', signUpDTO);

  return response.data;
}

export const authApi = {
  signIn,
  signUp,
};
