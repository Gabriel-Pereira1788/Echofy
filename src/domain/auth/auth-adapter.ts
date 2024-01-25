import {AuthCredentials, AuthCredentialsAPI} from './auth-types';

function toAuthCredentials(ac: AuthCredentialsAPI): AuthCredentials {
  return {
    id: ac.id,
    email: ac.email,
    birthDate: ac.birthDate,
    firstLogin: ac.firstLogin,
  };
}

export const authAdapter = {
  toAuthCredentials,
};
