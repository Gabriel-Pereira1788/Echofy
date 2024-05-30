import {PaginatedDocs} from '@infra';
import {IFavoriteExternalData} from '@models';

import {bookMockDataApi} from '../../book/mock/bookMock';

export const favoriteDataMock: PaginatedDocs<IFavoriteExternalData> = {
  docs: [
    {
      book_id: bookMockDataApi.id,
      uid: '1234',
      book: bookMockDataApi,
      id: '12345',
    },
  ],

  nextPage: 0,
  page: 1,
  prevPage: 0,
  totalDocs: 1,
  totalPages: 1,
};
