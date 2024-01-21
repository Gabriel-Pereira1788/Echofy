import {Theme, theme} from '@styles';
import React from 'react';
import {Text as TextRN, TextStyle} from 'react-native';
import {TextProps, FontStyleProps} from './textTypes';
import {$fontSize, $fontWeight} from './textConstants';

export function Text({
  text,
  preset,
  color = 'white',
  children,
  ...rest
}: TextProps) {
  const _color = theme.colors[color];

  if (preset) {
    const style = makePresetFont(preset);
    return (
      <TextRN
        style={{
          color: _color,
          ...style,
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
