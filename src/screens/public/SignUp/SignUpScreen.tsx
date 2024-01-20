import React from 'react';
import {Button, Input, Box, FormInput} from '@components';
import {TextDataPolicy} from './components/TextDataPolicy';
import {SharedAuthLayout} from '@shared';
import {AuthStackProps} from '@router';
import {useAuthSignUp} from '@domain';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {SignUpSchema, signUpSchema} from './signUpSchema';

export function SignUpScreen({}: AuthStackProps<'SignUpScreen'>) {
  const {isLoading, signUp} = useAuthSignUp();

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
          text="Entrar"
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        />
        <Button text="Cancel" type="outline" />
      </Box>
    </SharedAuthLayout>
  );
}
