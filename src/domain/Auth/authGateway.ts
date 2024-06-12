import {api} from '@api';

import {
  AuthCredentials,
  AuthCredentialsAPI,
  AuthSignInDTO,
  AuthSignUpDTO,
} from './authTypes';

async function signIn(signInDTO: AuthSignInDTO) {
  const response = await api.post<AuthCredentialsAPI>('auth/signIn', signInDTO);

  return response.data;
}

async function signUp(signUpDTO: AuthSignUpDTO) {
  const response = await api.post<AuthCredentialsAPI>('auth/signUp', signUpDTO);

  return response.data;
}

async function update(uid: string, body: Partial<AuthCredentials>) {
  const response = await api.patch<AuthCredentialsAPI>(
    `auth/update/${uid}`,
    body,
  );

  return response.data;
}

export const authGateway = {
  signIn,
  signUp,
  update,
};
