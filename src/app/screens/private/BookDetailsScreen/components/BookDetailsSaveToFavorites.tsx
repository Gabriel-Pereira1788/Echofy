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
  console.log('FAVORITE-BOOK', favoriteBook?.book.bookTitle);
  const {sendToFavorite} = useSendToFavorite({
    onSuccess: () => {
      toast.show({
        title: 'Success!',
        message: 'Sended to favorites!',
        type: 'success',
      });
    },
  });
  const {removeToFavorite} = useRemoveToFavorite();

  function changeFavoriteState() {
    console.log('FAVORITE-BOOK', favoriteBook);
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
      iconName="bookmark"
      color="unactiveColor"
      onPress={changeFavoriteState}
      size="sp20"
      type={favoriteBook ? 'bold' : 'light'}
    />
  );
}
