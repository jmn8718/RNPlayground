import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { Easing, timing, Value } from 'react-native-reanimated';
import { PlayerContext } from '../../contexts';
import { VideoModal } from './VideoModal';

const { height } = Dimensions.get('window');

export const PlayerProvider = function ({ children }) {
  // animation will be used as the value for opacity. Initial Value: 0
  const animation = useRef(new Value(0)).current;

  const [video, setVideo] = useState(null);

  useEffect(() => {
    timing(animation, {
      toValue: video ? 1 : 0,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [video, animation]);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [height, 0],
  });
  return (
    <PlayerContext.Provider value={{ setVideo, video }}>
      <View style={styles.container}>
        <View style={StyleSheet.absoluteFill}>{children}</View>
        {video && (
          <Animated.View style={{ transform: [{ translateY }] }}>
            <VideoModal video={video} />
          </Animated.View>
        )}
      </View>
    </PlayerContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
