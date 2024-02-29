import React from 'react';

import {BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {IconProps} from '../Icon/iconTypes';
import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';
type Props = {
  text: string;
  testID?: string;
  onPress?: () => void;
  iconName?: IconProps['iconName'];
};

export function Category({testID, text, iconName, onPress}: Props) {
  return (
    <TouchableOpacityBox
      testID={testID}
      boxProps={{
        width: 'auto',
        marginVertical: 'sp7',
        padding: 'sp10',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'rd15',
        backgroundColor: 'contrast',
        ...$shadowCategoryBoxProps,
      }}
      onPress={onPress}>
      {iconName && (
        <Icon iconName={iconName} size="sp20" color="baseIconColor" />
      )}
      <Text text={text} />
    </TouchableOpacityBox>
  );
}

const $shadowCategoryBoxProps: BoxProps = {
  shadowOpacity: 0.1,
  shadowRadius: 1.92,
  elevation: 4,
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: 2,
  },
};
