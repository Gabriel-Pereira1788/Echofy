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
  bookMockApi,
} from './handlers';

export {
  authCredentialsValidatedAPIMock,
  authCredentialsMock,
  authCredentialsAPIMock,
  allCategoriesMock,
  bookCategoryMock,
  bookMock,
  bookMockApi,
};
export const server = setupServer(...authHandler, ...bookHandler);
