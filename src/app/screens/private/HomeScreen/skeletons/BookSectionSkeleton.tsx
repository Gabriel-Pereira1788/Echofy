import React from 'react';

import {BookSection} from '@domain';

import {Box} from '@components';

import {BookSectionItemSkeleton} from '../skeletons/BookSectionItemSkeleton';

type Props = {sectionIdentify: BookSection['identify']};

export function BookSectionSkeleton({sectionIdentify}: Props) {
  return (
    <Box flex={1} width={'100%'} flexDirection="row" gap="sp10">
      {Array.from({length: 10}).map((_, index) => {
        return (
          <BookSectionItemSkeleton
            key={index}
            sectionIdentify={sectionIdentify}
          />
        );
      })}
    </Box>
  );
}