import {BookCategory} from '../Book';

import {AuthCredentials, AuthCredentialsAPI} from './auth-types';

function toAuthCredentials(ac: AuthCredentialsAPI): AuthCredentials {
  return {
    id: ac.id,
    email: ac.email,
    birthDate: ac.birthDate,
    firstLogin: ac.firstLogin,
    userCategories: ac.userCategories,
  };
}

function toCategoriesApi(bookCategories: BookCategory[]): string[] {
  return bookCategories.reduce((acc, category) => {
    acc = [...acc, category.text];
    return acc;
  }, [] as string[]);
}

export const authAdapter = {
  toAuthCredentials,
  toCategoriesApi,
};
