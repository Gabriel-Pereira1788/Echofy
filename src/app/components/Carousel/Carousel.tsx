import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Box} from '../Box/Box';

import {CarouselContent} from './CarouselContent';
import {CarouselSelector} from './CarouselSelector';

type CarouselProps<TContent> = {
  HeaderElement?: JSX.Element;
  content: TContent[];
  renderItem: ({item}: ListRenderItemInfo<TContent>) => JSX.Element;
  RightComponent?: JSX.Element;
  EmptyComponent?: JSX.Element;
  onChangeCurrentPosition?: (position: number) => void;
};

export type CarouselRef = {
  onSelect: (position: number) => void;
  currentPosition: number;
};

function CarouselComponent<TContent>(
  {
    content,
    renderItem,
    HeaderElement,
    RightComponent,
    onChangeCurrentPosition,
    EmptyComponent,
  }: CarouselProps<TContent>,
  ref?: React.ForwardedRef<CarouselRef>,
) {
  const flatListRef = useRef<FlatList>(null);
  const [currentPosition, setCurrentPosition] = useState(0);

  function onSelect(position: number) {
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: position,
    });
  }

  function onChangeContent(position: number) {
    setCurrentPosition(position);
    onChangeCurrentPosition?.(position);
  }

  useImperativeHandle(ref, () => ({onSelect, currentPosition}));

  if (content.length === 0) {
    return (
      <Box width={'100%'} marginVertical="sp25">
        {EmptyComponent && EmptyComponent}
      </Box>
    );
  }
  return (
    <Box width={'100%'} marginVertical="sp25">
      {HeaderElement && HeaderElement}
      <CarouselContent
        flatListRef={flatListRef}
        content={content}
        renderItem={renderItem}
        onChangeContent={onChangeContent}
      />

      <Box
        width={'100%'}
        flexDirection="row"
        marginVertical="sp10"
        alignItems="center"
        justifyContent={RightComponent ? 'space-between' : 'center'}>
        <Box gap="sp15" flexDirection="row">
          {content.map((_, index) => (
            <CarouselSelector
              key={index}
              isSelected={index === currentPosition}
              onPress={() => onSelect(index)}
            />
          ))}
        </Box>

        {RightComponent && RightComponent}
      </Box>
    </Box>
  );
}

export const Carousel = forwardRef(CarouselComponent) as <TContent>(
  props: CarouselProps<TContent> & {ref?: React.ForwardedRef<CarouselRef>},
) => JSX.Element;
