import React, {useState} from 'react';
import {Animated, FlatList, Pressable} from 'react-native';

import {useSlideModalAnimated} from '@animations';
import {Track} from '@services';

import {Box, Input, Modal, TouchableOpacityBox} from '@components';
import {CommonModalProps} from '@hooks';

import {PlayerSelectChapterItem} from './PlayerSelectChapterItem';

export type PlayerSelectChaptersProps = {
  trackChapters: Track[];
  onSkipTo: (index: number) => void;
};

export function PlayerSelectChapters({
  trackChapters,
  refModalActions,
  onSkipTo,
  onClose,
}: PlayerSelectChaptersProps & CommonModalProps) {
  const [renderChapters, setRenderChapters] = useState(trackChapters);
  const slideModalAnimated = useSlideModalAnimated();

  function onSearchChapter(text: string) {
    if (text.trim() === '') {
      setRenderChapters(trackChapters);
      return;
    }
    const filteredChapters = trackChapters.filter(chapter =>
      chapter.title.includes(text),
    );
    setRenderChapters(filteredChapters);
  }

  function handleSkipTo(chapter: number) {
    return () => {
      onSkipTo(chapter);
    };
  }
  return (
    <Modal
      ref={refModalActions}
      animationType="fade"
      onRequestClose={onClose}
      transparent={true}
      onShow={() => {
        slideModalAnimated.slideUp();
      }}>
      <Box backgroundColor="transparent" flex={1}>
        <Pressable
          style={{
            flex: 1,
          }}
          onPress={() => slideModalAnimated.slideDown(onClose)}
        />

        <Animated.View
          style={{
            height: slideModalAnimated.heightValue,
          }}>
          <Box
            height={'100%'}
            width={'100%'}
            overflow="hidden"
            borderTopLeftRadius="rd15"
            borderTopRightRadius="rd15"
            padding="sp25"
            backgroundColor="bgMain"
            justifyContent="flex-start">
            <FlatList
              showsVerticalScrollIndicator={false}
              data={renderChapters}
              maxToRenderPerBatch={4}
              ListHeaderComponent={
                <Box marginBottom="sp10">
                  <Input
                    placeholder="Digite aqui..."
                    onChangeText={onSearchChapter}
                  />
                </Box>
              }
              renderItem={({item}) => (
                <TouchableOpacityBox
                  onPress={handleSkipTo(item.chapterNumber)}
                  activeOpacity={0.8}>
                  <PlayerSelectChapterItem track={item} />
                </TouchableOpacityBox>
              )}
            />
          </Box>
        </Animated.View>
      </Box>
    </Modal>
  );
}
