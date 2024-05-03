import React from 'react';

import {
  EllipseRound,
  EllipseStroke,
  Huray,
  Logo,
  ReviewsIllustration,
} from '@assets';
import {ColorSchemeName} from 'react-native/types';

import {useTheme} from '@hooks';

type KeyMappedImage =
  | 'ellipseRound'
  | 'ellipseStroke'
  | 'huray'
  | 'logo'
  | 'reviewsIllustration';

interface ImageProps {
  imageName: KeyMappedImage;
  width?: number;
  height?: number;
}

export interface ImageCommonType {
  width?: string;
  height?: string;

  mode?: ColorSchemeName;
}
export function Image({imageName, width, height}: ImageProps) {
  const {colorScheme} = useTheme();
  const ImageComponent = mappedImage[imageName];
  const _width = width ? width.toString() : '';
  const _height = height ? height.toString() : '';

  return <ImageComponent height={_height} width={_width} mode={colorScheme} />;
}

const mappedImage: Record<
  KeyMappedImage,
  React.ComponentType<ImageCommonType>
> = {
  ellipseRound: EllipseRound,
  ellipseStroke: EllipseStroke,
  huray: Huray,
  logo: Logo,
  reviewsIllustration: ReviewsIllustration,
};
