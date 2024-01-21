import React, {useCallback, useState} from 'react';
import {Box, BoxProps} from '../Box/Box';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

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
      <TouchableOpacityBox boxProps={$wrapperBoxStyle} onPress={onPress}>
        {value && <Icon color="neutral80" iconName="tickSquare" size="sp28" />}
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
