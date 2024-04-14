import {
  CrudSchemaData,
  IBookCategorySchema,
  IBookSchema,
  PaginatedDocs,
  Schemas,
  database,
} from '@infra';
import {QueryParams} from 'src/domain/types';

import {BookApi, BookSectionApi} from '../book-types';

import {
  BookRepository,
  QueryByCategory,
  QueryRecommended,
  QuerySearchByText,
} from './types';

async function getCategories() {
  const results = await database.getAll<IBookCategorySchema>(
    Schemas.BookCategory,
  );

  const categories = results.map(data => data.text);
  return categories;
}

async function getRecommendedForYou(
  query: QueryRecommended,
): Promise<PaginatedDocs<IBookSchema> | null> {
  console.log('[QUERY]', query);

  const results = database.readPaginatedResult(Schemas.Book, {
    skip: query.skip,
    top: query.top,
  });

  return results;
}

async function getBestSeller(
  query: QueryParams,
): Promise<PaginatedDocs<IBookSchema> | null> {
  const results = database.readPaginatedResult(Schemas.Book, {
    skip: query.skip,
    top: query.top,
  });
  return results;
}

async function findByCategory(
  query: QueryByCategory,
): Promise<PaginatedDocs<IBookSchema> | null> {
  console.log(query);
  if (query.category === 'best-seller') {
    const result = await getBestSeller({
      top: query.top,
      skip: query.skip,
    });

    return result;
  }

  if (query.category === 'recommended-for-you') {
    const result = await getRecommendedForYou({
      uid: query.uid,
      skip: query.skip,
      top: query.top,
    });

    return result;
  }

  const result = database.readPaginatedResult(
    Schemas.Book,
    {
      skip: query.skip,
      top: query.top,
    },
    {
      field: 'book_genres',
      valueMatch: query.category,
      filter: 'book_genres CONTAINS[c] $0',
    },
  );
  return result;
}

async function findBySearchText(
  query: QuerySearchByText,
): Promise<BookSectionApi> {
  console.log(query);

  return {
    docs: [],
    nextPage: 0,
    page: 1,
    prevPage: 1,
    totalDocs: 1,
    totalPages: 1,
  };
}

async function findById(id: string): Promise<BookApi> {
  console.log(id);

  return {
    book_author: '',
    book_desc: '',
    book_genres: [''],
    book_image: '',
    book_read_link: '',
    book_star_raiting: '',
    book_title: '',
    id: '',
    playlist_chapters: [],
  };
}

function create<SchemaName extends Schemas>(
  schema: SchemaName,
  data: CrudSchemaData<SchemaName> | CrudSchemaData<SchemaName>[],
) {
  try {
    if (Array.isArray(data)) {
      data.forEach(value => {
        database.create(schema, value);
      });
    } else {
      database.create(schema, data);
    }
  } catch (error) {
    console.log('ERROR ON CREATE', schema, error);
  }
}
export const bookLocalRepository: BookRepository = {
  getCategories,
  getRecommendedForYou,
  getBestSeller,
  findByCategory,
  findBySearchText,
  findById,
  create,
};
