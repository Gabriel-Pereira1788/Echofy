import {BookCategory, CategoryIdentify} from '../Book';

import {AuthCredentials, AuthCredentialsAPI} from './auth-types';

function toAuthCredentials(ac: AuthCredentialsAPI): AuthCredentials {
  return {
    id: ac.id,
    name: ac.name,
    email: ac.email,
    birthDate: ac.birthDate,
    firstLogin: ac.firstLogin,
    userCategories: ac.userCategories,
  };
}

function toCategoriesApi(bookCategories: BookCategory[]): CategoryIdentify[] {
  return bookCategories.reduce((acc, category) => {
    acc = [...acc, category.text];
    return acc;
  }, [] as CategoryIdentify[]);
}

export const authAdapter = {
  toAuthCredentials,
  toCategoriesApi,
};
