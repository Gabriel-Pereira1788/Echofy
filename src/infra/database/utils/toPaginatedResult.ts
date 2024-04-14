import {QueryParams} from 'src/domain/types';

import {PaginatedDocs} from '../types';

export function toPaginatedResult<TData>(
  docs: TData[],
  query: QueryParams,
): PaginatedDocs<TData> {
  const totalDocs = docs.length;
  const totalPages = Math.ceil(totalDocs / query.top!);

  const currentPage = Math.floor(query.skip! / query.top!) + 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;
  const prevPage = currentPage > 1 ? currentPage - 1 : null;

  return {
    docs: docs.slice(query.skip, query.top),
    nextPage,
    page: currentPage,
    prevPage,
    totalDocs,
    totalPages,
  };
}
