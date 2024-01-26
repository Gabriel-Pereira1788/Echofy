import React from 'react';

import {useAuthFinishRegister} from '@domain';
import {useAuthContext} from '@providers';
import {AuthStackProps} from '@router';
import {SharedPublicLayout} from '@shared';

import {Box, Button, Image, Text} from '@components';

export function ReadyToGoScreen({route}: AuthStackProps<'ReadyToGoScreen'>) {
  const params = route.params;

  const {uid} = useAuthContext();
  const {finishRegister, isLoading} = useAuthFinishRegister({
    onSuccess: ac => {},
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
        <Box>
          <Image imageName="huray" width={250} height={250} />
        </Box>
        <Text text="You are ready to go!" preset="semiBold/16" color="black" />

        {params.selectedCategories && params.selectedCategories.length > 0 && (
          <Text
            text="Congratulation,any interesting topics will be shortly in your hands!"
            preset="regular/14"
            color="black"
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
