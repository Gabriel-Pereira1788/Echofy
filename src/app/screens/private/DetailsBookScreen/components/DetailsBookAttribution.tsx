import React from 'react';

import {Box, Text} from '@components';

type Props = {
  title: string;
  author: string;
};

export function DetailsBookAttribution({title, author}: Props) {
  return (
    <Box gap="sp3" width={'100%'} marginTop="sp10">
      <Text text={title} preset="medium/20" />
      <Text
        text={author}
        preset="regular/16"
        setColorsTheme={{
          dark: 'neutral10',
          light: 'neutral50',
        }}
      />
    </Box>
  );
}
