import React from 'react';

import {Box, Text} from '@components';

type Props = {
  label: string;
  value: string;
};
export function ProfileInfoItem({label, value}: Props) {
  return (
    <Box
      width={'100%'}
      height={70}
      alignItems="center"
      paddingHorizontal="sp25"
      flexDirection="row"
      justifyContent="flex-start"
      borderTopWidth={1}
      borderColor="borderCommonColor"
      borderBottomWidth={1}
      gap="sp28">
      <Text
        text={label}
        preset="medium/16"
        setColorsTheme={{
          dark: 'neutral20',
          light: 'neutral80',
        }}
      />
      <Text
        text={value}
        preset="regular/14"
        setColorsTheme={{
          dark: 'neutral20',
          light: 'neutral80',
        }}
      />
    </Box>
  );
}
