import {useAuthContext} from '@providers';
import {useQuery} from '@tanstack/react-query';

import {Queries} from '../../types';
import {favoritesService} from '../favoritesService';

export function useGetFavoriteBook(bookId: string) {
  const {uid} = useAuthContext();

  const {data, isLoading, isError} = useQuery({
    queryKey: [Queries.FavoriteBook],
    queryFn: () => favoritesService.getFavoriteBook(bookId, uid),
  });

  return {
    favoriteBook: data,
    isLoading,
    isError,
  };
}
