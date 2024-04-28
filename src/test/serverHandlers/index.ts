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
  reviewMock,
  bookMockApi,
} from './handlers';
import {reviewHandler} from './handlers/review/review-handler';

export {
  authCredentialsValidatedAPIMock,
  authCredentialsMock,
  authCredentialsAPIMock,
  allCategoriesMock,
  reviewMock,
  bookCategoryMock,
  sectionBooksMock,
  bookMock,
  bookMockApi,
};
export const server = setupServer(
  ...authHandler,
  ...bookHandler,
  ...reviewHandler,
);
