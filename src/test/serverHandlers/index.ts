import {setupServer} from 'msw/node';

import {
  authHandler,
  authCredentialsMock,
  authCredentialsAPIMock,
  bookCategoryMock,
  allCategoriesMock,
  authCredentialsValidatedAPIMock,
  bookHandler,
} from './handlers';

export {
  authCredentialsValidatedAPIMock,
  authCredentialsMock,
  authCredentialsAPIMock,
  allCategoriesMock,
  bookCategoryMock,
};
export const server = setupServer(...authHandler, ...bookHandler);
