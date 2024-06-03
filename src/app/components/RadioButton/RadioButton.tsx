import React from 'react';

import {Box} from '../Box/Box';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

export type RadioButtonProps = {
  isSelected: boolean;
  onPress: () => void;
};

export function RadioButton({isSelected, onPress}: RadioButtonProps) {
  return (
    <TouchableOpacityBox
      boxProps={{
        height: 20,
        width: 20,
        borderWidth: isSelected ? 2 : 1,
        borderRadius: 'rd100',
        borderColor: isSelected ? 'primary50' : 'neutral20',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      hitSlop={20}
      onPress={onPress}>
      <Box
        backgroundColor={isSelected ? 'primary70' : undefined}
        padding="sp5"
        style={{borderRadius: 100, overflow: 'hidden'}}
      />
    </TouchableOpacityBox>
  );
}
