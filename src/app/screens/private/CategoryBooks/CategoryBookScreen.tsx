import React from 'react';

import {AppStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';

import {Text} from '@components';

export function CategoryBookScreen({
  route,
}: AppStackProps<'CategoryBookScreen'>) {
  const categoryIdentify = route.params.categoryIdentify;
  return (
    <SharedWrapperScreen>
      <Text text={categoryIdentify} />
    </SharedWrapperScreen>
  );
}
