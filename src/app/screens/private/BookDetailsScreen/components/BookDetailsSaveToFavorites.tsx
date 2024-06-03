import React from 'react';

import {
  useGetFavoriteBook,
  useRemoveToFavorite,
  useSendToFavorite,
} from '@domain';
import {useToastActions} from '@services';

import {ActivityIndicator, IconPress} from '@components';

type Props = {
  bookId: string;
};

export function BookDetailsSaveToFavorites({bookId}: Props) {
  const toast = useToastActions();

  const {favoriteBook, isLoading} = useGetFavoriteBook(bookId);

  const {sendToFavorite} = useSendToFavorite({
    onSuccess: () => {
      toast.show({
        title: 'Success!',
        message: 'Sended to favorites!',
        type: 'success',
      });
    },
  });
  const {removeToFavorite} = useRemoveToFavorite({
    onSuccess: () => {
      toast.show({
        title: 'Success!',
        message: 'Remove to favorites!',
        type: 'success',
      });
    },
  });

  function changeFavoriteState() {
    if (favoriteBook) {
      removeToFavorite(favoriteBook.id);
    } else {
      sendToFavorite(bookId);
    }
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <IconPress
      testID="icon-mark-element"
      iconName="bookmark"
      color="unactiveColor"
      onPress={changeFavoriteState}
      size="sp20"
      type={favoriteBook ? 'bold' : 'light'}
    />
  );
}
