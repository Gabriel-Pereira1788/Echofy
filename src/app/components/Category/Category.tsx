import React from 'react';

import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

type Props = {
  text: string;
  onPress?: () => void;
};

export function Category({text, onPress}: Props) {
  return (
    <TouchableOpacityBox
      boxProps={{
        width: 'auto',
        padding: 'sp10',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'rd15',
        backgroundColor: 'contrast',
      }}
      onPress={onPress}>
      <Text text={text} />
    </TouchableOpacityBox>
  );
}
