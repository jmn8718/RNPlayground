/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  Easing,
  Value,
  Clock,
  cond,
  eq,
  set,
  add,
  sub,
  multiply,
  lessThan,
  stopClock,
  event,
  interpolate,
  timing,
  neq,
} from 'react-native-reanimated';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

import { getColor } from '../../styles/colors';
import { VideoContent } from './VideoContent';
import { PlayerControls, PLACEHOLDER_WIDTH } from './PlayerControls';
import { runSpring } from './utils';

// TODO add proper video player
import { Player } from './Player';

const AnimatedVideo = Animated.createAnimatedComponent(Player);

const { height, width } = Dimensions.get('window');
const minHeight = 84;
const midBound = height - 44 - 84 * 2;
const upperBound = midBound + minHeight;

const shadow = {
  alignItems: 'center',
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.18,
  shadowRadius: 2,
};

export class VideoModal extends React.PureComponent {
  translationY = new Value(0);

  velocityY = new Value(0);

  offsetY = new Value(0);

  offsetY2 = new Value(0);

  gestureState = new Value(State.UNDETERMINED);

  onGestureEvent;

  translateY;

  constructor(props) {
    super(props);
    const {
      translationY,
      velocityY,
      offsetY,
      gestureState: state,
      offsetY2,
    } = this;
    this.onGestureEvent = event(
      [
        {
          nativeEvent: {
            translationY,
            velocityY,
            state,
          },
        },
      ],
      { useNativeDriver: true },
    );
    const clockY = new Clock();
    const finalTranslateY = add(
      add(translationY, offsetY),
      multiply(0.2, velocityY),
    );
    const snapPoint = cond(
      lessThan(finalTranslateY, sub(offsetY, height / 4)),
      0,
      upperBound,
    );
    this.translateY = cond(
      eq(state, State.END),
      [
        set(
          translationY,
          runSpring(clockY, add(translationY, offsetY), snapPoint),
        ),
        set(offsetY, translationY),
        translationY,
      ],
      [
        cond(eq(state, State.BEGAN), [
          stopClock(clockY),
          cond(neq(offsetY2, 0), [set(offsetY, 0), set(offsetY2, 0)]),
        ]),
        add(offsetY, translationY),
      ],
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.slideUp();
    }
  }

  slideUp = () =>
    timing(this.offsetY2, {
      toValue: -upperBound,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    }).start();

  render() {
    const { onGestureEvent, translateY: y, offsetY2 } = this;
    const translateY = add(y, offsetY2);
    const tY = interpolate(translateY, {
      inputRange: [0, midBound],
      outputRange: [0, midBound],
      extrapolate: Extrapolate.CLAMP,
    });
    const opacity = interpolate(translateY, {
      inputRange: [0, midBound - 100],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP,
    });
    const videoContainerWidth = interpolate(translateY, {
      inputRange: [0, midBound],
      outputRange: [width, width],
      extrapolate: Extrapolate.CLAMP,
    });
    const videoWidth = interpolate(translateY, {
      inputRange: [0, midBound, upperBound],
      outputRange: [width, width, PLACEHOLDER_WIDTH],
      extrapolate: Extrapolate.CLAMP,
    });
    const videoHeight = interpolate(translateY, {
      inputRange: [0, midBound, upperBound],
      outputRange: [width / 1.78, minHeight, minHeight],
      extrapolate: Extrapolate.CLAMP,
    });
    const containerHeight = interpolate(translateY, {
      inputRange: [0, midBound],
      outputRange: [height, 0],
      extrapolate: Extrapolate.CLAMP,
    });
    const playerControlOpaciy = interpolate(translateY, {
      inputRange: [midBound, upperBound],
      outputRange: [0, 1],
      extrapolate: Extrapolate.CLAMP,
    });
    return (
      <SafeAreaInsetsContext.Consumer>
        {(insets) => (
          <View
            style={{
              marginTop: insets.top,
              marginBottom: insets.bottom,
            }}>
            <PanGestureHandler
              onHandlerStateChange={onGestureEvent}
              activeOffsetY={[-10, 10]}
              {...{ onGestureEvent }}>
              <Animated.View
                style={{
                  ...shadow,
                  transform: [
                    {
                      translateY: tY,
                    },
                  ],
                }}>
                <Animated.View
                  style={{
                    width: videoContainerWidth,
                    backgroundColor: getColor('WHITE'),
                  }}>
                  <Animated.View
                    style={{
                      ...StyleSheet.absoluteFillObject,
                      opacity: playerControlOpaciy,
                    }}>
                    <PlayerControls onPress={this.slideUp} title="DEF" />
                  </Animated.View>
                  <AnimatedVideo
                    style={{ width: videoWidth, height: videoHeight }}
                  />
                </Animated.View>
                <Animated.View
                  style={{
                    width: videoContainerWidth,
                    height: containerHeight,
                    backgroundColor: getColor('WHITE'),
                  }}>
                  <Animated.View style={{ opacity }}>
                    <VideoContent />
                  </Animated.View>
                </Animated.View>
              </Animated.View>
            </PanGestureHandler>
          </View>
        )}
      </SafeAreaInsetsContext.Consumer>
    );
  }
}
