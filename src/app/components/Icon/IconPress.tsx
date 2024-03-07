import React from 'react';

import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

import {Icon} from './Icon';
import {IconBase, IconProps} from './iconTypes';

type IconBaseProps = IconProps & IconBase;
interface IconPressProps extends IconBaseProps {
  onPress: () => void;
  label?: string;
}

export function IconPress({onPress, label, ...iconProps}: IconPressProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      activeOpacity={0.8}
      boxProps={{
        gap: 'sp10',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon {...iconProps} />
      {label && (
        <Text text={label} preset="regular/10" color={iconProps.color} />
      )}
    </TouchableOpacityBox>
  );
}
