import React from 'react';

import {Book as BookData} from '@domain';
import {getDynamicSize} from '@utils';

import {Box} from '../Box/Box';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

import {BookAuthor} from './BookAuthor';
import {BookCover} from './BookCover';
import {BookTitle} from './BookTitle';

export interface BookProps {
  book: BookData;
  renderTitle?: boolean;
  renderAuthor?: boolean;
  size?: {width?: number | '100%'; height?: number | '100%'};
  onPress?: () => void;
  testID?: string;
}

export function Book({
  book,
  renderTitle,
  renderAuthor,
  testID,
  size,
  onPress,
}: BookProps) {
  const {dynamicWidth} = getDynamicSize({
    widthPercentage: 40,
  });
  const $width = size && size.width ? size.width : dynamicWidth;
  const $height = size && size.height ? size.height : dynamicWidth;
  return (
    <TouchableOpacityBox
      testID={testID ? testID : 'book-item'}
      activeOpacity={0.8}
      disabled={!!onPress === false}
      onPress={onPress}
      boxProps={{
        gap: 'sp10',
        justifyContent: 'flex-start',
        alignContent: 'center',
        width: $width,
      }}>
      <BookCover uri={book.bookImage} height={$height} />

      <Box
        width={'90%'}
        alignItems="flex-start"
        justifyContent="center"
        gap="sp3">
        {renderTitle && <BookTitle bookTitle={book.bookTitle} />}
        {renderAuthor && <BookAuthor bookAuthor={book.bookAuthor} />}
      </Box>
    </TouchableOpacityBox>
  );
}
