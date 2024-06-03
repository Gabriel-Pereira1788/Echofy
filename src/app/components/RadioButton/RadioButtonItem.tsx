import React from 'react';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

import {RadioButton, RadioButtonProps} from './RadioButton';

export type RadioButtonItemProps = RadioButtonProps & {
  label: string;
  description?: string;
};

export function RadioButtonItem({
  label,
  description,
  ...radioButtonProps
}: RadioButtonItemProps) {
  return (
    <Box padding="sp16">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text preset="medium/16" text={label} />
        <RadioButton {...radioButtonProps} />
      </Box>

      {description && (
        <Box width={'80%'}>
          <Text color="neutral20" text={description} />
        </Box>
      )}
    </Box>
  );
}
