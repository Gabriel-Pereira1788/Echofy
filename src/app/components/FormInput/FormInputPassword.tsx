import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {Input, IInputProps} from '../Input/Input';

interface FormInputPasswordProps extends Omit<IInputProps, 'value' | 'error'> {}

export function FormInputPassword<TFieldValue extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  ...props
}: FormInputPasswordProps & UseControllerProps<TFieldValue>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({fieldState, field}) => (
        <Input
          errorMessage={fieldState.error?.message || errorMessage}
          textContentType="oneTimeCode"
          secureTextEntry={true}
          onChangeText={field.onChange}
          value={field.value}
          {...props}
        />
      )}
    />
  );
}
