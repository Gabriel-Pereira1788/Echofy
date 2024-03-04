import React from 'react';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

type Props = {
  title: string;
  author: string;
};

export function PlayerAttribution({title, author}: Props) {
  const $title = title.length > 100 ? title.slice(0, 100) + '...' : title;
  return (
    <Box flex={1.5} height={'100%'} gap="sp10">
      <Text text={$title} preset="medium/16" />
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
