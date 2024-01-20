import React, {useCallback, useState} from 'react';
import {
  Text,
  Button,
  Box,
  CheckBox,
  TouchableOpacityBox,
  FormInput,
} from '@components';
import {SocialSignIn} from './components/SocialSignIn';
import {AuthStackProps} from '@router';
import {SharedAuthLayout} from '@shared';
import {useAuthSignIn} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';

import {useForm} from 'react-hook-form';
import {SignInSchema, signInSchema} from './signInSchema';

export function SignInScreen({navigation}: AuthStackProps<'SignInScreen'>) {
  const [isChecked, setIsChecked] = useState(false);

  const {control, handleSubmit} = useForm<SignInSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signInSchema),
  });

  const {isLoading, signIn} = useAuthSignIn({});

  const onChange = useCallback(() => {
    setIsChecked(prev => !prev);
  }, []);

  function redirectToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  async function onSubmit(data: SignInSchema) {
    await signIn(data);
  }

  return (
    <SharedAuthLayout title="Login to Your Account">
      <Box gap="sp15" width={'100%'}>
        <FormInput placeholder="Email" name="email" control={control} />
        <FormInput placeholder="Password" name="password" control={control} />
        <CheckBox value={isChecked} onChange={onChange} label="Remember me" />
        <Button
          text="Entrar"
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        />
      </Box>

      <Box width={'100%'} marginTop="sp20">
        <TouchableOpacityBox boxProps={{alignSelf: 'flex-end'}}>
          <Text text="Forget Password?" preset="semiBold/14" color="accent50" />
        </TouchableOpacityBox>

        <Box width={'100%'} marginTop="sp20" gap="sp15">
          <SocialSignIn />

          <Box alignSelf="center" flexDirection="row" gap="sp7">
            <Text
              text="Dont have an account ?"
              color="neutral80"
              preset="regular/14"
            />
            <TouchableOpacityBox onPress={redirectToSignUpScreen}>
              <Text text="Register" color="accent50" preset="semiBold/14" />
            </TouchableOpacityBox>
          </Box>
        </Box>
      </Box>
    </SharedAuthLayout>
  );
}
