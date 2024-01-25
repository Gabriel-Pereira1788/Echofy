import React from 'react';

import {EllipseRound, EllipseStroke} from '@assets';

type KeyMappedImage = 'ellipseRound' | 'ellipseStroke';

interface ImageProps {
  imageName: KeyMappedImage;
  width?: number;
  height?: number;
}

export interface ImageCommonType {
  width?: string;
  height?: string;
}
export function Image({imageName, width, height}: ImageProps) {
  const ImageComponent = mappedImage[imageName];
  const _width = width ? width.toString() : '';
  const _height = height ? height.toString() : '';

  return <ImageComponent height={_height} width={_width} />;
}

const mappedImage: Record<
  KeyMappedImage,
  React.ComponentType<ImageCommonType>
> = {
  ellipseRound: EllipseRound,
  ellipseStroke: EllipseStroke,
};
