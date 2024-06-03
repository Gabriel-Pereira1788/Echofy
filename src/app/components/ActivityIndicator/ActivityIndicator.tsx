import React from 'react';
import {ActivityIndicator as RNActivityIndicator} from 'react-native';

import {Theme} from '@styles';

import {useTheme} from '@hooks';

type ActivityIndicatorProps = {
  colorName?: keyof Theme['colors'];
  size?: keyof Theme['spacing'];
  testID?: string;
};

export function ActivityIndicator({
  colorName = 'alertColor',
  size = 'sp25',
  testID,
}: ActivityIndicatorProps) {
  const {colors, spacing} = useTheme();

  const color = colors[colorName];
  const $size = spacing[size];

  return <RNActivityIndicator testID={testID} size={$size} color={color} />;
}
