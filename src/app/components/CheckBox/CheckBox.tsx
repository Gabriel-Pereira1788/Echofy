import React from 'react';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

export interface CheckBoxProps {
  value: boolean;
  onChange: () => void;
  label?: string;
}

export function CheckBox({onChange, value, label}: CheckBoxProps) {
  function onPress() {
    onChange();
  }

  return (
    <Box flexDirection="row" gap="sp7" alignItems="center">
      <TouchableOpacityBox
        testID="checkbox"
        boxProps={$wrapperBoxStyle}
        onPress={onPress}>
        {value && (
          <Box testID="icon-checked">
            <Icon color="neutral80" iconName="tickSquare" size="sp28" />
          </Box>
        )}
      </TouchableOpacityBox>
      {label && <Text text={label} preset="regular/14" color="neutral80" />}
    </Box>
  );
}

const $wrapperBoxStyle: BoxProps = {
  borderRadius: 'rd8',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: 'primary20',
  borderWidth: 1,
  width: 25,
  height: 25,
};
