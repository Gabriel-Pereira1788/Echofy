import {useAuthContext} from '@providers';

import {CommonError, MutationConfig} from '../../types';
import {favoritesService} from '../favorites-service';
import {useToggleSendToFavorite} from '../hooks/useToggleSendToFavorite';

export function useSendToFavorite(config?: MutationConfig<null, CommonError>) {
  const {uid} = useAuthContext();
  const {mutate, isPending, isSuccess} = useToggleSendToFavorite<{
    bookId: string;
  }>({
    serviceFn: ({bookId}) => favoritesService.sendToFavorites(bookId, uid!),
    config,
  });

  return {
    sendToFavorite: (bookId: string) => mutate({bookId}),
    isPendingToSend: isPending,
    isSuccess,
  };
}
