import {setupServer} from 'msw/node';

import {
  authHandler,
  authCredentialsMock,
  authCredentialsAPIMock,
  bookCategoryMock,
  allCategoriesMock,
  authCredentialsValidatedAPIMock,
  bookHandler,
  reviewsListMock,
  bookMock,
  sectionBooksMock,
  reviewMock,
  bookMockApi,
  imageLinkMock,
  favoritesHandler,
} from './handlers';
import {reviewHandler} from './handlers/review/review-handler';

export {
  authCredentialsValidatedAPIMock,
  authCredentialsMock,
  authCredentialsAPIMock,
  allCategoriesMock,
  reviewsListMock,
  reviewMock,
  bookCategoryMock,
  sectionBooksMock,
  bookMock,
  bookMockApi,
  imageLinkMock,
};
export const server = setupServer(
  ...authHandler,
  ...bookHandler,
  ...reviewHandler,
  ...favoritesHandler,
);
