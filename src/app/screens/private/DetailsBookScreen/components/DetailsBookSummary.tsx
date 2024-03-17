import React, {useState} from 'react';

import {Box, Text, TouchableOpacityBox} from '@components';

type Props = {
  summary: string;
};

export function DetailsBookSummary({summary}: Props) {
  const [readMore, setReadMore] = useState(false);
  const summaryText = readMore ? summary : summary.slice(0, 500) + '...';

  function toggleReadMore() {
    setReadMore(prev => !prev);
  }
  return (
    <Box width={'100%'} gap="sp20" paddingBottom="sp10">
      <Text text="Summary" preset="semiBold/14" />

      <Text
        testID="summary-text"
        text={summaryText}
        preset="light/14"
        setColorsTheme={{
          dark: 'neutral20',
          light: 'neutral60',
        }}>
        <TouchableOpacityBox
          testID="button-toggle-read-mode"
          hitSlop={25}
          activeOpacity={0.8}
          onPress={toggleReadMore}>
          <Text
            text={!readMore ? ' read more' : ' read less'}
            preset="medium/16"
            color="accent50"
          />
        </TouchableOpacityBox>
      </Text>
    </Box>
  );
}
