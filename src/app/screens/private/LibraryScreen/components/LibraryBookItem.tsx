import React from 'react';

import {Book} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {
  BookAuthor,
  BookCover,
  BookTitle,
  Box,
  TouchableOpacityBox,
} from '@components';

type Props = {
  book: Book;
};

export function LibraryBookItem({book}: Props) {
  const navigation = useNavigation();

  function redirectToBookScreen() {
    navigation.navigate('BookDetailsScreen', {id: book.id});
  }
  return (
    <TouchableOpacityBox
      activeOpacity={0.8}
      testID="library-book-item"
      onPress={redirectToBookScreen}
      boxProps={{
        width: '100%',
        flexDirection: 'row',
        marginVertical: 'sp23',
        gap: 'sp10',
      }}>
      <Box width={120}>
        <BookCover uri={book.bookImage} height={120} />
      </Box>

      <Box alignSelf="center" gap="sp10" width={'60%'}>
        <BookTitle bookTitle={book.bookTitle} />
        <BookAuthor bookAuthor={book.bookAuthor} />
      </Box>
    </TouchableOpacityBox>
  );
}
