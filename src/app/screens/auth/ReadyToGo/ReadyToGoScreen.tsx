import React from 'react';

import {useAuthFinishRegister} from '@domain';
import {useAuthContext} from '@providers';
import {AuthStackProps} from '@router';
import {useToastActions} from '@services';
import {SharedPublicLayout} from '@shared';

import {Box, Button, Image, Text} from '@components';

export function ReadyToGoScreen({route}: AuthStackProps<'ReadyToGoScreen'>) {
  const params = route.params;

  const {uid} = useAuthContext();

  const toastActions = useToastActions();

  const {finishRegister, isLoading} = useAuthFinishRegister({
    onSuccess: () => {
      toastActions.show({
        title: 'Registration completed successfully!',
        message: '',
        type: 'success',
      });
    },

    onError: error => {
      console.log('error', error);
    },
  });

  async function onFinishRegister() {
    if (uid) {
      finishRegister({
        uid,
        userSelectedCategories: params.selectedCategories,
      });
    }
  }
  return (
    <SharedPublicLayout>
      <Box gap="sp28" width={'100%'} alignItems="center" padding="sp16">
        <Box testID="wrapper-image">
          <Image imageName="huray" width={250} height={250} />
        </Box>
        <Text text="You are ready to go!" preset="semiBold/16" />

        {params.selectedCategories && params.selectedCategories.length > 0 && (
          <Text
            text="Congratulation,any interesting topics will be shortly in your hands!"
            preset="regular/14"
          />
        )}
        <Box width={'100%'}>
          <Button
            text="Finish"
            onPress={onFinishRegister}
            disabled={isLoading}
          />
        </Box>
      </Box>
    </SharedPublicLayout>
  );
}
