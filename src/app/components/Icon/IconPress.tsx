import React from 'react';

import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

import {Icon} from './Icon';
import {IconBase, IconProps} from './iconTypes';

type IconBaseProps = IconProps & IconBase;
interface IconPressProps extends IconBaseProps {
  onPress: () => void;
  testID?: string;
  iconTestId?: string;
  label?: string;
  hitSlop?: number;
}

export function IconPress({
  onPress,
  label,
  iconTestId,
  testID,
  hitSlop,
  ...iconProps
}: IconPressProps) {
  return (
    <TouchableOpacityBox
      testID={testID}
      onPress={onPress}
      hitSlop={hitSlop}
      activeOpacity={0.8}
      boxProps={{
        gap: 'sp10',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon {...iconProps} testID={iconTestId} />
      {label && (
        <Text text={label} preset="regular/10" color={iconProps.color} />
      )}
    </TouchableOpacityBox>
  );
}
