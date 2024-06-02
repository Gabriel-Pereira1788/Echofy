import React from 'react';
import {ActivityIndicator} from 'react-native';

import {
  useGetFavoriteBook,
  useRemoveToFavorite,
  useSendToFavorite,
} from '@domain';
import {useToastActions} from '@services';

import {IconPress} from '@components';

type Props = {
  bookId: string;
};

export function BookDetailsSaveToFavorites({bookId}: Props) {
  const toast = useToastActions();

  const {favoriteBook, isLoading} = useGetFavoriteBook(bookId);

  console.log('FAVORITE-BOOK', favoriteBook);
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
    return <ActivityIndicator size={20} />;
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
