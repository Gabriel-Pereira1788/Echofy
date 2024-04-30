import React, {useRef, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

import {CarouselContent} from './CarouselContent';
import {CarouselSelector} from './CarouselSelector';

type CarouselProps<TContent> = {
  text: string;
  content: TContent[];
  renderItem: ({item}: ListRenderItemInfo<TContent>) => JSX.Element;
  RightComponent?: JSX.Element;
  EmptyComponent?: JSX.Element;
};

export function Carousel<TContent>({
  text,
  content,
  renderItem,
  RightComponent,
  EmptyComponent,
}: CarouselProps<TContent>) {
  const flatListRef = useRef<FlatList>(null);
  const [currentPosition, setCurrentPosition] = useState(0);

  function onSelect(position: number) {
    return () => {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: position,
      });
    };
  }
  if (content.length === 0) {
    return (
      <Box width={'100%'} marginVertical="sp25">
        {EmptyComponent && EmptyComponent}
      </Box>
    );
  }
  return (
    <Box width={'100%'} marginVertical="sp25">
      <Text
        text={text}
        preset="semiBold/14"
        setColorsTheme={{light: 'neutral80', dark: 'neutral5'}}
      />
      <CarouselContent
        flatListRef={flatListRef}
        content={content}
        renderItem={renderItem}
        onChangeContent={position => {
          setCurrentPosition(position);
        }}
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
              onPress={onSelect(index)}
            />
          ))}
        </Box>

        {RightComponent && RightComponent}
      </Box>
    </Box>
  );
}
