import React from 'react';

import {CommonStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';

import {Text} from '@components';

export function NewReviewScreen({}: CommonStackProps<'NewReviewScreen'>) {
  return (
    <SharedWrapperScreen>
      <Text text="NewReviewScreen" />
    </SharedWrapperScreen>
  );
}
