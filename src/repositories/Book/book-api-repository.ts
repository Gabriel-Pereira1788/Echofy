import {api} from '@api';
import {PaginatedDocs} from '@infra';
import {IBookExternalData} from 'src/models';

import {BookRepository, QueryByCategory} from './types';

async function findBySearchText(searchText: string, top = 10, skip = 0) {
  const response = await api.get<PaginatedDocs<IBookExternalData>>(
    `book/find-by-text/${searchText}?top=${top}&skip=${skip}`,
  );

  return response.data;
}

async function getRecommendedForYou(uid: string, top = 10, skip = 0) {
  const response = await api.get<PaginatedDocs<IBookExternalData>>(
    `book/recommended-for-you/${uid}?top=${top}&skip=${skip}`,
  );
  return response.data;
}

async function getBestSeller(top = 10, skip = 0) {
  const response = await api.get<PaginatedDocs<IBookExternalData>>(
    `book/best-seller?top=${top}&skip=${skip}`,
  );

  return response.data;
}

async function findByCategory({
  category,
  top = 10,
  uid,
  skip = 0,
}: QueryByCategory) {
  if (category === 'recommended-for-you') {
    const response = await getRecommendedForYou(uid, top, skip);

    return response;
  }

  if (category === 'best-seller') {
    const response = await getBestSeller(top, skip);

    return response;
  }
  const response = await api.get<PaginatedDocs<IBookExternalData>>(
    `book/find-by-category/${category}?top=${top}&skip=${skip}`,
  );
  return response.data;
}

async function findBookById(id: string) {
  const response = await api.get<IBookExternalData>(`book/find-book/${id}`);

  return response.data;
}
const get: BookRepository['get'] = async query => {
  if (query.searchText && query.searchText.trim() !== '') {
    return await findBySearchText(query.searchText, query.top, query.skip);
  }

  if (query.category && query.uid) {
    return await findByCategory({
      category: query.category,
      uid: query.uid,
      skip: query.skip,
      top: query.top,
    });
  }

  return null;
};

const findById: BookRepository['findById'] = async id => {
  return await findBookById(id);
};

export const bookApiRepository: Omit<BookRepository, 'create'> = {
  get,
  findById,
};
