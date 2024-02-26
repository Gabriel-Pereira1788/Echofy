import React from 'react';
import {Image} from 'react-native';

import {Book as BookData} from '@domain';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

export interface BookProps {
  book: BookData;
  renderTitle?: boolean;
  renderAuthor?: boolean;
  boxImageSize?: {width?: number; height?: number};
}

export function Book({
  book,
  renderTitle,
  renderAuthor,
  boxImageSize,
}: BookProps) {
  const imageHeight =
    boxImageSize && boxImageSize.height ? boxImageSize.height : '100%';

  const imageWidth =
    boxImageSize && boxImageSize.width ? boxImageSize.width : 'auto';
  return (
    <Box
      gap="sp10"
      width={'100%'}
      justifyContent="flex-start"
      alignContent="center">
      <Box height={imageHeight} width={imageWidth}>
        <Image
          testID="book-image"
          style={{width: '100%', height: '100%', borderRadius: 10}}
          source={{
            uri: book.bookImage,
          }}
          resizeMode="stretch"
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
          {renderAuthor && (
            <Text
              text={book.bookAuthor}
              preset="medium/14"
              setColorsTheme={{dark: 'neutral10', light: 'primary50'}}
            />
          )}
        </Box>
      )}
    </Box>
  );
}
