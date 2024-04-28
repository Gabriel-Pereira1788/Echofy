import React from 'react';

import {CommonStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';

import {Text} from '@components';

export function BookReviewPanel({}: CommonStackProps<'BookReviewPanel'>) {
  return (
    <SharedWrapperScreen>
      <Text text="BookReviewPanel" />
    </SharedWrapperScreen>
  );
}
