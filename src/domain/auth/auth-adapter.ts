import {AuthCredentials, AuthCredentialsAPI} from './auth-types';

function toAuthCredentials(ac: AuthCredentialsAPI): AuthCredentials {
  return {
    birthDate: ac.birthDate,
    email: ac.email,
    id: ac.id,
  };
}

export const authAdapter = {
  toAuthCredentials,
};
