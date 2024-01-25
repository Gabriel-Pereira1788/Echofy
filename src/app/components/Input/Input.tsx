import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import {pallete} from '../../styles/theme';
import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

export interface IInputProps extends TextInputProps {
  errorMessage?: string;
  disabled?: boolean;
}

export function Input({errorMessage, disabled, ...rest}: IInputProps) {
  rest.onChange = !disabled ? rest.onChange : undefined;
  rest.onChangeText = !disabled ? rest.onChangeText : undefined;
  return (
    <Box>
      <Box
        padding="sp20"
        backgroundColor="neutral5"
        borderColor={errorMessage ? 'accent60' : 'neutral5'}
        borderWidth={errorMessage ? 1 : 0}
        width="100%"
        borderRadius={'rd8'}>
        <TextInput {...rest} placeholderTextColor={pallete.neutral40} />
      </Box>
      {errorMessage && (
        <Box alignSelf="flex-start" marginTop="sp7">
          <Text text={errorMessage} color="accent60" />
        </Box>
      )}
    </Box>
  );
}
