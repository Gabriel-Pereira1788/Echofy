import React from 'react';

import {SharedBrandHeader} from '@shared';

import {Box} from '@components';

import {HomeScreenCategories} from './HomeScreenCategories';

type Props = {};

export function HomeScreenHeader({}: Props) {
  return (
    <>
      <SharedBrandHeader />
      <Box height={20} />
      <HomeScreenCategories />
    </>
  );
}
