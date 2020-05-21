import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { PlayerContext } from '../../contexts';

const { width } = Dimensions.get('window');
export const PLACEHOLDER_WIDTH = width / 3;

// TODO add proper logic
export const PlayerControls = function ({ title = 'x', onPress = () => {} }) {
  const { setVideo } = useContext(PlayerContext);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.placeholder} />
        <Text style={styles.title} numerOfLine={3}>
          {title}
        </Text>
        <Ionicons style={styles.icon} name="ios-play" />
        <TouchableWithoutFeedback onPress={() => setVideo(null)}>
          <Ionicons style={styles.icon} name="ios-close" />
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: 8,
  },
  placeholder: {
    width: PLACEHOLDER_WIDTH,
  },
  icon: {
    fontSize: 24,
    color: 'gray',
    padding: 8,
  },
});
