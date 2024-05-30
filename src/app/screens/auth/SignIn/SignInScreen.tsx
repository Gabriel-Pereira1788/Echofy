import React from 'react';

import {CommonError, useAuthSignIn} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {AuthStackProps} from '@router';
import {useToastActions} from '@services';
import {SharedAuthLayout} from '@shared';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Box,
  CheckBox,
  TouchableOpacityBox,
  FormInput,
  FormInputPassword,
} from '@components';

import {useRemindAccessData} from './hooks/useRemindAccessData';
import {SignInSchema, signInSchema} from './signInSchema';

export function SignInScreen({navigation}: AuthStackProps<'SignInScreen'>) {
  const {control, getValues, setValue, handleSubmit} = useForm<SignInSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signInSchema),
  });

  const toastActions = useToastActions();
  const {isLoading, signIn} = useAuthSignIn({
    onSuccess: ac => {
      toastActions.show({
        title: 'Success!',
        message: 'Welcome!',
        type: 'success',
      });

      if (ac.firstLogin) {
        navigation.navigate('WelcomeScreen', {uid: ac.id});
      }
    },
    onError: handleOnError,
  });

  const {isRemembered, onChangeIsRemembered} = useRemindAccessData({
    getValues,
    setValue,
  });

  function redirectToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  async function onSubmit(data: SignInSchema) {
    await signIn(data);
  }

  function handleOnError(err: CommonError) {
    if (err.status === 500) {
      navigation.navigate('ErrorScreen');
    } else {
      toastActions.show({
        title: 'Erro!',
        message: err.message,
        type: 'error',
      });
    }
  }

  return (
    <SharedAuthLayout title="Login to Your Account">
      <Box gap="sp15" width={'100%'}>
        <FormInput placeholder="Email" name="email" control={control} />
        <FormInputPassword
          placeholder="Password"
          name="password"
          control={control}
        />
        <CheckBox
          value={isRemembered}
          onChange={onChangeIsRemembered}
          label="Remember me"
        />
        <Button
          text="Login"
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        />
      </Box>

      <Box width={'100%'} marginTop="sp20">
        <TouchableOpacityBox boxProps={{alignSelf: 'flex-end'}}>
          <Text text="Forget Password?" preset="semiBold/14" color="accent50" />
        </TouchableOpacityBox>

        <Box width={'100%'} marginTop="sp20" gap="sp15">
          <Box alignSelf="center" flexDirection="row" gap="sp7">
            <Text text="Dont have an account ?" preset="regular/14" />
            <TouchableOpacityBox onPress={redirectToSignUpScreen}>
              <Text text="Register" color="accent50" preset="semiBold/14" />
            </TouchableOpacityBox>
          </Box>
        </Box>
      </Box>
    </SharedAuthLayout>
  );
}
