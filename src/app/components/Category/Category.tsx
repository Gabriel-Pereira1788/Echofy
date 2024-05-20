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
  outline?: boolean;
  iconName?: IconProps['iconName'];
  isSelected?: boolean;
};

export function Category({
  testID,
  text,
  iconName,
  outline,
  isSelected,
  onPress,
}: Props) {
  const boxColors: BoxProps = !outline
    ? {backgroundColor: isSelected ? 'activeColor' : 'contrast'}
    : {
        borderColor: 'outlineCategoryColor',
        borderWidth: 1,
      };
  return (
    <TouchableOpacityBox
      testID={testID}
      boxProps={{
        ...$boxProps,
        ...boxColors,
        ...$shadowCategoryBoxProps,
      }}
      disabled={!!onPress === false}
      onPress={onPress}>
      {iconName && (
        <Icon iconName={iconName} size="sp20" color="baseIconColor" />
      )}
      <Text
        text={text}
        color={
          outline ? 'outlineCategoryColor' : isSelected ? 'contrast' : 'text'
        }
      />
    </TouchableOpacityBox>
  );
}

const $boxProps: BoxProps = {
  width: 'auto',
  marginVertical: 'sp7',
  padding: 'sp10',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'rd15',
};

const $shadowCategoryBoxProps: BoxProps = {
  shadowOpacity: 0.1,
  shadowRadius: 1.92,
  // elevation: 4,
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: 2,
  },
};
