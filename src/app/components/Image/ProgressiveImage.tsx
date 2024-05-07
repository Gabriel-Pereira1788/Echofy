import React, {useState} from 'react';
import {Image, ImageProps} from 'react-native';

import {Box, BoxProps} from '../Box/Box';
import {Skeleton} from '../Skeleton/Skeleton';

interface ProgressiveImageProps extends BoxProps {
  source: ImageProps['source'];
  testID?: string;
}

export function ProgressiveImage({
  source,
  testID,
  ...boxProps
}: ProgressiveImageProps) {
  const [loading, setLoading] = useState(true);

  function hideSkeleton() {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }
  return (
    <Box {...boxProps} overflow="hidden" position="relative">
      {loading && (
        <Skeleton width={'100%'} height={'100%'} position="absolute" />
      )}

      <Image
        testID={testID}
        onLoad={hideSkeleton}
        source={source}
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
      />
    </Box>
  );
}
