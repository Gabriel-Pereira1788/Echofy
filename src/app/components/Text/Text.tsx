import React from 'react';
import {Text as TextRN} from 'react-native';

import {darkTheme, theme} from '@styles';

import {useTheme} from '@hooks';

import {makePresetFont} from './functions/makePresetFont';
import {$fontSize, $fontWeight} from './textConstants';
import {TextProps, FontStyleProps} from './textTypes';

export function Text({
  text,
  testID,
  preset,
  color = 'text',
  align = 'auto',
  children,
  setColorsTheme,
  ...rest
}: TextProps) {
  const {colorScheme} = useTheme();

  const isDarkMode = colorScheme === 'dark';
  const _color = isDarkMode
    ? darkTheme.colors[setColorsTheme?.dark ?? color]
    : theme.colors[setColorsTheme?.light ?? color];

  if (preset) {
    const style = makePresetFont(preset);
    return (
      <TextRN
        testID={testID}
        style={{
          ...style,
          textAlign: align,
          color: _color,
        }}>
        {text}
        {children}
      </TextRN>
    );
  }

  const {size = 'medium16', weight = 'medium'} = rest as FontStyleProps;

  const fontSize = $fontSize[size];
  const fontWeight = $fontWeight[weight];

  return (
    <TextRN
      testID={testID}
      style={{fontSize: fontSize, color: _color, fontWeight: fontWeight}}>
      {text} {children}
    </TextRN>
  );
}
