import React from 'react';
import {Text as TextRN, useColorScheme} from 'react-native';

import {darkTheme, theme} from '@styles';

import {makePresetFont} from './functions/makePresetFont';
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
