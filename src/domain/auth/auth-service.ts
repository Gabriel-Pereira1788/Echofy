import {Schemas, database} from '@infra';

import {authAdapter} from './auth-adapter';
import {authApi} from './auth-api';
import {
  AuthCredentials,
  AuthSignInDTO,
  AuthSignUpDTO,
  FinishRegisterVariables,
} from './auth-types';

async function signIn(data: AuthSignInDTO) {
  const result = await authApi.signIn(data);

  const ac = authAdapter.toAuthCredentials(result);

  return ac;
}

async function signUp(data: AuthSignUpDTO) {
  const result = await authApi.signUp(data);

  const ac = authAdapter.toAuthCredentials(result);
  database.create(Schemas.User, ac);
  return ac;
}

async function finishRegister({
  uid,
  userSelectedCategories,
}: FinishRegisterVariables) {
  const userCategories = authAdapter.toCategoriesApi(userSelectedCategories);
  const body: Partial<AuthCredentials> = {
    firstLogin: false,
    userCategories,
  };
  const result = await authApi.update(uid, body);

  const ac = authAdapter.toAuthCredentials(result);

  return ac;
}
export const authService = {
  signIn,
  signUp,
  finishRegister,
};
