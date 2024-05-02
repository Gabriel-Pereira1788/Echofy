import React from 'react';

import {Box, Text} from '@components';

type Props = {
  title: string;
  message: string;
};

export default function EmptyState({title, message}: Props) {
  return (
    <Box flex={1} alignItems="center" justifyContent="center" gap="sp10">
      <Text text={title} preset="semiBold/24" />
      <Text text={message} preset="medium/10" />
    </Box>
  );
}
