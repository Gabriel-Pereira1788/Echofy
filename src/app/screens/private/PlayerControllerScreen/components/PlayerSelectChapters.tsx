import React, {useCallback} from 'react';
import {Animated, FlatList, ListRenderItemInfo, Pressable} from 'react-native';

import {useSlideModalAnimated} from '@animations';
import {Track, audioTracker} from '@infra';

import {Box, Input, Modal, TouchableOpacityBox} from '@components';
import {CommonModalProps} from '@hooks';

import {useSearchByText} from '../hooks';

import {PlayerSelectChapterItem} from './PlayerSelectChapterItem';

export type PlayerSelectChaptersProps = {
  onSkipTo: (index: number) => void;
};

export function PlayerSelectChapters({
  refModalActions,
  onSkipTo,
  onClose,
}: PlayerSelectChaptersProps & CommonModalProps) {
  const trackChapters = audioTracker.getTracks();
  const {chapters, onSearchChapter} = useSearchByText(trackChapters);

  const slideModalAnimated = useSlideModalAnimated();

  function handleSkipTo(chapter: number) {
    return () => {
      onSkipTo(chapter);
    };
  }

  const renderItem = useCallback(({item}: ListRenderItemInfo<Track>) => {
    return (
      <TouchableOpacityBox
        testID="chapter-item"
        onPress={handleSkipTo(item.chapterNumber)}
        activeOpacity={0.8}>
        <PlayerSelectChapterItem track={item} />
      </TouchableOpacityBox>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      testID="modal"
      ref={refModalActions}
      animationType="fade"
      onRequestClose={onClose}
      transparent={true}
      onShow={() => {
        slideModalAnimated.slideUp();
      }}>
      <Box backgroundColor="transparent" flex={1}>
        <Pressable
          testID="close-area"
          style={{
            flex: 1,
          }}
          onPress={() => slideModalAnimated.slideDown(onClose)}
        />

        <Animated.View
          testID={'slide-element'}
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
              testID="list-tracks"
              showsVerticalScrollIndicator={false}
              data={chapters}
              maxToRenderPerBatch={4}
              ListHeaderComponent={
                <Box marginBottom="sp10">
                  <Input
                    placeholder="Digite aqui..."
                    onChangeText={onSearchChapter}
                  />
                </Box>
              }
              renderItem={renderItem}
            />
          </Box>
        </Animated.View>
      </Box>
    </Modal>
  );
}
