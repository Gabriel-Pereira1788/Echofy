import React from 'react';

import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

type Props = {
  text: string;
  testID?: string;
  onPress?: () => void;
};

export function Category({testID, text, onPress}: Props) {
  return (
    <TouchableOpacityBox
      testID={testID}
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
