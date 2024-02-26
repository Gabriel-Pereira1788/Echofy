export interface MetaData {
  nextPage: number;
  page: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

export interface PaginatedResult<TData> {
  docs: TData[];
  meta: MetaData;
}
