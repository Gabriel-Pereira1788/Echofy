import React from 'react';
import {Text as TextRN, TextStyle, useColorScheme} from 'react-native';

import {darkTheme, theme} from '@styles';

import {$fontSize, $fontWeight} from './textConstants';
import {TextProps, FontStyleProps} from './textTypes';

export function Text({
  text,
  preset,
  color = 'text',
  children,
  setColorsTheme,
  ...rest
}: TextProps) {
  const isDarkMode = useColorScheme() === 'dark';

  const _color = isDarkMode
    ? darkTheme.colors[setColorsTheme?.dark ?? color]
    : theme.colors[setColorsTheme?.light ?? color];

  if (preset) {
    const style = makePresetFont(preset);
    return (
      <TextRN
        style={{
          ...style,
          color: _color,
        }}>
        {text} {children}
      </TextRN>
    );
  }

  const {size = 'medium16', weight = 'medium'} = rest as FontStyleProps;

  const fontSize = $fontSize[size];
  const fontWeight = $fontWeight[weight];

  return (
    <TextRN style={{fontSize: fontSize, color: _color, fontWeight: fontWeight}}>
      {text} {children}
    </TextRN>
  );
}

function makePresetFont(preset: TextProps['preset']): TextStyle | null {
  switch (preset) {
    case 'medium/16':
      return {
        fontSize: $fontSize.medium16,
        fontWeight: $fontWeight.medium,
      };
    case 'semiBold/16':
      return {
        fontSize: $fontSize.medium16,
        fontWeight: $fontWeight.semiBold,
      };
    case 'regular/14':
      return {
        fontSize: $fontSize.small14,
        fontWeight: $fontWeight.regular,
      };

    case 'semiBold/14':
      return {
        fontSize: $fontSize.small14,
        fontWeight: $fontWeight.semiBold,
      };
    default:
      return null;
  }
}
