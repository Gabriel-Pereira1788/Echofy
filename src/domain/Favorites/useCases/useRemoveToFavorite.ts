import {CommonError, MutationConfig} from '../../types';
import {favoritesService} from '../favoritesService';
import {useToggleSendToFavorite} from '../hooks/useToggleSendToFavorite';

export function useRemoveToFavorite(
  config?: MutationConfig<null, CommonError>,
) {
  const {mutate, isPending, isSuccess} = useToggleSendToFavorite<{id: string}>({
    serviceFn: ({id}) => favoritesService.removeToFavorite(id),
    config,
  });

  return {
    removeToFavorite: (id: string) => mutate({id}),
    isPendingToRemove: isPending,
    isSuccess,
  };
}
