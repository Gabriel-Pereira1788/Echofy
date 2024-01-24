import {BASE_URL} from '@api';
import {AuthSignInDTO} from '@domain';
import {HttpResponse, http} from 'msw';
import {AuthSignUpDTO} from 'src/domain/auth/auth-types';

import {authCredentialsAPIMock, authSignInValidation} from './mock/user';
export const authHandler = [
  http.post(`${BASE_URL}auth/signUp`, async ({request}) => {
    const authSignUp = (await request.json()) as AuthSignUpDTO;
    if (
      !authSignUp.email.trim() ||
      !authSignUp.password.trim() ||
      !authSignUp.birthDate.trim()
    ) {
      return new HttpResponse(
        {message: 'Something is wrong.'},
        {
          status: 404,
        },
      );
    }
    return HttpResponse.json(authCredentialsAPIMock, {status: 200});
  }),
  http.post(`${BASE_URL}auth/signIn`, async ({request}) => {
    const authSignIn = (await request.json()) as AuthSignInDTO;

    if (
      authSignInValidation.email === authSignIn.email &&
      authSignInValidation.password === authSignIn.password
    ) {
      return HttpResponse.json(authCredentialsAPIMock, {status: 200});
    }
    return new HttpResponse(
      {message: 'Invalid credentials.'},
      {
        status: 404,
      },
    );
  }),
];
