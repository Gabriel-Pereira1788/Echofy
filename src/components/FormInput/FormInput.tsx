import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {Input, IInputProps} from '../Input/Input';

export interface FormInputProps
  extends Omit<IInputProps, 'value' | 'error' | 'onChange' | 'onChangeText'> {}

export function FormInput<TFieldValue extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  ...props
}: FormInputProps & UseControllerProps<TFieldValue>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({fieldState, field}) => (
        <Input
          errorMessage={fieldState.error?.message || errorMessage}
          onChangeText={field.onChange}
          value={field.value}
          {...props}
        />
      )}
    />
  );
}
