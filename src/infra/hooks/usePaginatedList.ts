import {useEffect, useState} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';

import {PaginatedResult} from '../types';

export interface PaginatedListProps<TData> {
  queryKey: readonly string[];
  fetchPage: (page: number) => Promise<PaginatedResult<TData>>;
  enabled?: boolean;
  options?: PaginatedOptions;
}

interface PaginatedOptions {
  slateTime: number;
}

export function usePaginatedList<TData>({
  queryKey,
  enabled,
  fetchPage,
  options,
}: PaginatedListProps<TData>) {
  const [list, setList] = useState<TData[]>([]);
  const query = useInfiniteQuery({
    enabled,
    queryKey,
    staleTime: options?.slateTime,
    queryFn: ({pageParam = 1}) => {
      return fetchPage(pageParam as number);
    },
    getNextPageParam: ({meta}) => {
      return meta?.nextPage ? meta?.nextPage : null;
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<TData[]>((acc, curr) => {
        return [...acc, ...curr.docs];
      }, []);

      setList(newList);
    }
  }, [query.data]);

  return {
    list,
    getMore: query.fetchNextPage,
    isLoading: query.isPending,
    loadingNextPage: query.isFetchingNextPage,
    error: query.error,
    refresh: query.refetch,
    hasNextPage: query.hasNextPage,
    refreshing: query.isRefetching,
  };
}
