import React from 'react';

import {useAuthUpdateProfileImage} from '@domain';
import {useAuthContext} from '@providers';
import {useGetImageLibrary, useToastActions} from '@services';
import {SharedWrapperScreen} from '@shared';

import {Box, Button} from '@components';

import {ProfileImage, ProfileInfoItem} from './components';

export function ProfileScreen() {
  const {credentials} = useAuthContext();

  const {image, pickImage} = useGetImageLibrary();

  const toast = useToastActions();

  const {updateProfileImage, isLoading} = useAuthUpdateProfileImage({
    onSuccess: () => {
      toast.show({
        title: 'Success!',
        message: 'Update profile image success!',
        type: 'success',
      });
    },
    onError: error => {
      toast.show({
        title: 'Error!',
        message: error.message,
        type: 'error',
      });
    },
  });

  async function saveChanges() {
    if (image) {
      updateProfileImage(image);
    }
  }

  return (
    <SharedWrapperScreen
      customPadding
      goBack
      headerTitle="Profile"
      headerRight={
        <Button
          type="flat"
          text="Save"
          customColor="primary20"
          disabled={isLoading}
          loading={isLoading}
          onPress={saveChanges}
        />
      }>
      <Box flex={1} alignItems="center" width={'100%'}>
        <Box
          width={'100%'}
          alignItems="center"
          justifyContent="center"
          marginVertical="sp40">
          <ProfileImage
            pickImage={pickImage}
            profileImageUri={
              image ? image.uri : credentials?.profileImage ?? ''
            }
          />
        </Box>
        <ProfileInfoItem
          label="Display Name"
          value={credentials ? credentials.name : ''}
        />
        <ProfileInfoItem
          label="Email"
          value={credentials ? credentials.email : ''}
        />
        <ProfileInfoItem
          label="Date Birth"
          value={credentials ? credentials.birthDate : ''}
        />
      </Box>
    </SharedWrapperScreen>
  );
}
