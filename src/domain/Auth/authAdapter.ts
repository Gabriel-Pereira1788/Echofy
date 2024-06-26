import {BookCategory, CategoryIdentify} from '../Book';

import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuthCredentials(ac: AuthCredentialsAPI): AuthCredentials {
  return {
    id: ac.id,
    name: ac.name,
    email: ac.email,
    profileImage: ac.profileImage,
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
