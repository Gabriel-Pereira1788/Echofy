import React, {useState} from 'react';
import {Animated, View} from 'react-native';

import {getDynamicSize} from '@utils';
import BootSplash from 'react-native-bootsplash';

import {Loader} from '../Loader/Loader';
type Props = {
  onFinish: () => void;
  onInitializeApp: () => Promise<void>;
};

export function AnimatedSplashScreen({onFinish, onInitializeApp}: Props) {
  const {dynamicWidth} = getDynamicSize({
    widthPercentage: 22,
  });
  const [opacity] = useState(() => new Animated.Value(1));

  const [width] = useState(() => new Animated.Value(250));
  const [scale] = useState(() => new Animated.Value(1));

  const [showLoader, setShowLoader] = useState(false);
  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../../../../assets/bootsplash_manifest.json'),

    logo: require('../../../../assets/bootsplash_logo.png'),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      Animated.timing(width, {
        useNativeDriver: false,
        toValue: dynamicWidth,
        duration: 500,
      }).start(() => {
        Animated.timing(scale, {
          useNativeDriver: false,
          toValue: 1.3,
          duration: 200,
        }).start(({finished}) => {
          if (finished) {
            setShowLoader(true);
            onInitialize();
          }
        });
      });
    },
  });

  async function onInitialize() {
    await onInitializeApp();
    setTimeout(() => {
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 200,
      }).start(({finished}) => {
        if (finished) {
          onFinish();
        }
      });
    }, 500);
  }
  return (
    <Animated.View
      {...container}
      style={[container.style, {position: 'relative', flex: 1, opacity}]}>
      <View
        style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Animated.View
          style={{
            width,
            transform: [{scale}],
            alignSelf: 'center',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            overflow: 'hidden',
          }}>
          <Animated.Image testID={'logo'} {...logo} style={[logo.style]} />
        </Animated.View>

        {showLoader && (
          <View style={{position: 'absolute', top: 100}}>
            <Loader />
          </View>
        )}
      </View>
    </Animated.View>
  );
}
