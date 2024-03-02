import React from 'react';

import axios from 'axios';

import {Box, Text} from '@components';

type Props = {};

async function getText() {
  const result = await axios.get(
    'https://www.loyalbooks.com/download/text/Moby-Dick-by-Herman-Melville.txt',
  );
  return result.data;
}
export const DetailsBookText = async ({}: Props) => {
  const text = await getText();
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text text={text} preset="medium/14" />
    </Box>
  );
};
