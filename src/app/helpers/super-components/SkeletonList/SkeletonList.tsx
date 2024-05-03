import React from 'react';

import {Box, BoxProps} from '@components';

import {useAppSafeArea} from '../../hooks/useAppSafeArea';

interface SkeletonListProps extends BoxProps {
  renderItem: (index?: number) => JSX.Element;
  itensToRender: number;
  containerType?: 'vertical' | 'column';
}

export function SkeletonsList({
  renderItem,
  itensToRender,
  containerType = 'vertical',
}: SkeletonListProps) {
  const {top} = useAppSafeArea();
  const $style: BoxProps =
    containerType === 'column' ? $columnWrapperStyles : $verticalWrapperStyle;
  return (
    <Box gap="sp10" width={'100%'} flex={1}>
      <Box flex={1} {...$style} style={{marginTop: top}}>
        {Array.from({length: itensToRender}).map((_, index) => {
          return <Box key={index}>{renderItem()}</Box>;
        })}
      </Box>
    </Box>
  );
}

const $columnWrapperStyles: BoxProps = {
  rowGap: 'sp25',
  width: '100%',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const $verticalWrapperStyle: BoxProps = {
  width: '100%',
  gap: 'sp25',
};
