import React, {useCallback, useRef} from 'react';
import {Animated, Easing, FlatList, Pressable} from 'react-native';

import {Track} from '@services';
import {dimensions} from '@utils';

import {Box, Input, Modal} from '@components';
import {CommonModalProps} from '@hooks';

import {PlayerSelectChapterItem} from './PlayerSelectChapterItem';

export type PlayerSelectChaptersProps = {
  tracks: Track[];
};

export function PlayerSelectChapters({
  tracks,
  refModalActions,
  onClose,
}: PlayerSelectChaptersProps & CommonModalProps) {
  const heightValue = useRef(new Animated.Value(0)).current;
  const onSlideUp = useCallback(() => {
    Animated.timing(heightValue, {
      toValue: dimensions.height / 2,
      delay: 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [heightValue]);

  const onSlideDown = useCallback(
    (callback?: Animated.EndCallback) => {
      Animated.timing(heightValue, {
        toValue: 0,
        delay: 50,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(callback);
    },
    [heightValue],
  );

  return (
    <Modal
      ref={refModalActions}
      animationType="fade"
      onRequestClose={onClose}
      transparent={true}
      onShow={() => {
        onSlideUp();
      }}>
      <Box backgroundColor="transparent" flex={1}>
        <Pressable
          style={{
            flex: 1,
          }}
          onPress={() => onSlideDown(onClose)}
        />

        <Animated.View
          style={{
            height: heightValue,
          }}>
          <Box
            height={'100%'}
            width={'100%'}
            borderTopLeftRadius="rd15"
            borderTopRightRadius="rd15"
            padding="sp25"
            backgroundColor="bgMain"
            justifyContent="flex-start">
            <FlatList
              showsVerticalScrollIndicator={false}
              data={tracks}
              ListHeaderComponent={
                <Box marginBottom="sp10">
                  <Input placeholder="Digite aqui..." />
                </Box>
              }
              renderItem={({item}) => <PlayerSelectChapterItem track={item} />}
            />
          </Box>
        </Animated.View>
      </Box>
    </Modal>
  );
}
