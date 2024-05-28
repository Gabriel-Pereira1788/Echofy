import React from 'react';

import {Box} from '../Box/Box';
import {IInputProps, Input} from '../Input/Input';
import {Text} from '../Text/Text';

export interface SearchBarProps extends IInputProps {
  title?: string;
}

export function SearchBar({title, ...inputProps}: SearchBarProps) {
  return (
    <Box width="100%" gap="sp10">
      {title && <Text text={title} preset="semiBold/24" />}
      <Input {...inputProps} />
    </Box>
  );
}
