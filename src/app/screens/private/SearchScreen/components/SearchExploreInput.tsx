import React from 'react';

import {Box, IInputProps, Input, Text} from '@components';

interface Props extends Pick<IInputProps, 'onChangeText'> {}

export function SearchExploreInput({onChangeText}: Props) {
  return (
    <Box width="100%" gap="sp10">
      <Text text="Explore" preset="semiBold/24" />
      <Input
        placeholder="Search Books or Author ..."
        onChangeText={onChangeText}
      />
    </Box>
  );
}
