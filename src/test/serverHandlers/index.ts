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
  sectionBooksMock,
  bookMockApi,
} from './handlers';

export {
  authCredentialsValidatedAPIMock,
  authCredentialsMock,
  authCredentialsAPIMock,
  allCategoriesMock,
  bookCategoryMock,
  sectionBooksMock,
  bookMock,
  bookMockApi,
};
export const server = setupServer(...authHandler, ...bookHandler);
