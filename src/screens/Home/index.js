import React, { useContext } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles as appStyles } from '../../styles';
import { PlayerContext } from '../../contexts';

import { VIDEOS } from '../../data';

export function HomeScreen() {
  // video logic for testing purposes
  const { setVideo, video } = useContext(PlayerContext);
  const onPress = () => {
    setVideo(video ? null : VIDEOS[0]);
  };
  return (
    <SafeAreaView style={[appStyles.mainStyle, styles.wrapper]}>
      <Button title="SET VIDEO" onPress={onPress} />
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
