import {setupServer} from 'msw/node';

import {
  authHandler,
  authCredentialsMock,
  authCredentialsAPIMock,
  bookCategoryMock,
  allCategoriesMock,
  authCredentialsValidatedAPIMock,
  bookHandler,
  bookMock,
} from './handlers';

export {
  authCredentialsValidatedAPIMock,
  authCredentialsMock,
  authCredentialsAPIMock,
  allCategoriesMock,
  bookCategoryMock,
  bookMock,
};
export const server = setupServer(...authHandler, ...bookHandler);
