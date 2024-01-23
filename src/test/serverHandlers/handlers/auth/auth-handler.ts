import {BASE_URL} from '@api';
import {AuthSignInDTO} from '@domain';
import {HttpResponse, http} from 'msw';

import {authCredentialsMock, authSignInValidation} from './mock/user';
export const authHandler = [
  http.post(`${BASE_URL}auth/signUp`, async () => {
    return HttpResponse.json(authCredentialsMock, {status: 200});
  }),
  http.post(`${BASE_URL}auth/signIn`, async ({request}) => {
    const authSignIn = (await request.json()) as AuthSignInDTO;

    if (
      authSignInValidation.email === authSignIn.email &&
      authSignInValidation.password === authSignIn.password
    ) {
      return HttpResponse.json(authCredentialsMock, {status: 200});
    }
    return new HttpResponse(null, {
      status: 404,
    });
  }),
];
