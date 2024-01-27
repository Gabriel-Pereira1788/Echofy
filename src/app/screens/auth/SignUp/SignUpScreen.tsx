import React from 'react';

import {useAuthSignUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {AuthStackProps} from '@router';
import {SharedAuthLayout} from '@shared';
import {useToastActions} from '@store';
import {useForm} from 'react-hook-form';

import {Button, Box, FormInput} from '@components';

import {TextDataPolicy} from './components/TextDataPolicy';
import {SignUpSchema, signUpSchema} from './signUpSchema';

export function SignUpScreen({navigation}: AuthStackProps<'SignUpScreen'>) {
  const toastActions = useToastActions();
  const {isLoading, signUp} = useAuthSignUp({
    onSuccess: ac => {
      toastActions.show({
        title: 'Success!',
        message: 'Registered successfully.',
        type: 'success',
      });

      if (ac.firstLogin) {
        navigation.navigate('WelcomeScreen', {uid: ac.id});
      }
    },
    onError: error => {
      toastActions.show({
        title: 'Error!',
        message: error.message,
        type: 'error',
      });
    },
  });

  const {control, handleSubmit} = useForm<SignUpSchema>({
    defaultValues: {
      email: '',
      password: '',
      birthDate: '',
    },
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  });

  async function onSubmit(data: SignUpSchema) {
    await signUp(data);
  }

  function onCancel() {
    navigation.pop();
  }

  return (
    <SharedAuthLayout title="Register">
      <Box gap="sp15" width={'100%'}>
        <FormInput placeholder="Email" name="email" control={control} />
        <FormInput placeholder="Password" name="password" control={control} />
        <FormInput
          placeholder="Date of Birth"
          name="birthDate"
          control={control}
        />
        <TextDataPolicy />
        <Button
          text="Sign Up"
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        />
        <Button text="Cancel" type="outline" onPress={onCancel} />
      </Box>
    </SharedAuthLayout>
  );
}
