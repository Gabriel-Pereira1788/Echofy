import React from 'react';

import {Book as BookType} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Book, TouchableOpacityBox} from '@components';

type Props = {
  book: BookType;
};

export function CategoryBookItem({book}: Props) {
  const navigation = useNavigation();
  function redirectToBookScreen() {
    navigation.navigate('BookScreen', {
      id: book.id,
    });
  }
  return (
    <TouchableOpacityBox
      onPress={redirectToBookScreen}
      testID="category-book-item">
      <Book
        book={book}
        renderAuthor
        renderTitle
        onPress={redirectToBookScreen}
      />
    </TouchableOpacityBox>
  );
}
