import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import {useTheme} from '@hooks';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

export interface IInputProps extends TextInputProps {
  errorMessage?: string;
  disabled?: boolean;
}

export function Input({errorMessage, disabled, style, ...rest}: IInputProps) {
  const theme = useTheme();
  rest.onChange = !disabled ? rest.onChange : undefined;
  rest.onChangeText = !disabled ? rest.onChangeText : undefined;
  return (
    <Box>
      <Box
        padding="sp20"
        backgroundColor="bgInput"
        borderColor={errorMessage ? 'accent60' : 'bgInput'}
        borderWidth={errorMessage ? 1 : 0}
        width="100%"
        borderRadius={'rd8'}>
        <TextInput
          {...rest}
          style={[style, {color: theme.colors.text}]}
          placeholderTextColor={theme.colors.placeHolderTextColor}
        />
      </Box>
      {errorMessage && (
        <Box alignSelf="flex-start" marginTop="sp7">
          <Text text={errorMessage} color="accent60" />
        </Box>
      )}
    </Box>
  );
}
