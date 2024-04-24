import React from 'react';

import {getDynamicSize} from '@utils';

import {Box} from '../Box/Box';
import {Skeleton} from '../Skeleton/Skeleton';

import {BookProps} from './Book';

interface BookSkeletonProps
  extends Pick<BookProps, 'size' | 'renderTitle' | 'renderAuthor'> {}

export function BookSkeleton({
  size,
  renderAuthor,
  renderTitle,
}: BookSkeletonProps) {
  const {dynamicWidth} = getDynamicSize({
    widthPercentage: 40,
  });

  const $width = size && size.width ? size.width : dynamicWidth;
  const $height = size && size.height ? size.height : dynamicWidth;
  return (
    <Box
      gap="sp10"
      justifyContent="flex-start"
      alignContent="center"
      testID="book-skeleton-item">
      <Skeleton width={$width} height={$height} autoplay />
      <Box
        padding="sp3"
        width={'90%'}
        alignItems="flex-start"
        justifyContent="center"
        gap="sp3">
        {renderTitle && <Skeleton width={'70%'} height={10} autoplay />}
        {renderAuthor && <Skeleton width={'50%'} height={10} autoplay />}
      </Box>
    </Box>
  );
}
