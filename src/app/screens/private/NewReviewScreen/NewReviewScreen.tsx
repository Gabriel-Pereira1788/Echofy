import React from 'react';

import {CommonStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';
import {dimensions} from '@utils';
import {LifeCycleHandler} from 'react-modular-state';

import {Box, Image} from '@components';

import {NewReviewRatings, NewReviewContent} from './components';
import {useOnSend} from './hooks';
import {newReviewScreenStore} from './store';

export function NewReviewScreen({route}: CommonStackProps<'NewReviewScreen'>) {
  const {bookId} = route.params;
  const onSend = useOnSend(bookId);
  return (
    <LifeCycleHandler store={newReviewScreenStore}>
      <SharedWrapperScreen goBack headerTitle={'New Review'}>
        <Box
          flex={1}
          width={'100%'}
          justifyContent="flex-start"
          alignItems="center"
          gap="sp25">
          <NewReviewRatings />
          <NewReviewContent onSend={onSend} />
          <Image
            imageName="reviewsIllustration"
            width={(dimensions.width / 100) * 70}
            height={300}
          />
        </Box>
      </SharedWrapperScreen>
    </LifeCycleHandler>
  );
}
