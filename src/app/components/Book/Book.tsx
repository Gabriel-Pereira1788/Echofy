import React from 'react';
import {Image} from 'react-native';

import {Book as BookData} from '@domain';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

export interface BookProps {
  book: BookData;
  renderTitle?: boolean;
  renderAuthor?: boolean;
}

export function Book({book, renderTitle, renderAuthor}: BookProps) {
  return (
    <Box width={'100%'} height={'100%'} gap="sp10">
      <Box flex={1}>
        <Image
          testID="book-image"
          style={{width: '100%', height: '100%', borderRadius: 10}}
          source={{
            uri: book.bookImage,
          }}
          resizeMode="cover"
        />
      </Box>

      {(renderTitle || renderAuthor) && (
        <Box
          width={'100%'}
          alignItems="flex-start"
          justifyContent="center"
          gap="sp3">
          <Text
            text={book.bookTitle}
            setColorsTheme={{dark: 'neutral5', light: 'neutral80'}}
          />
        </Box>
      )}
    </Box>
  );
}
