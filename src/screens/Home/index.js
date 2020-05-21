import React, { useContext } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles as appStyles } from '../../styles';
import { PlayerContext } from '../../contexts';

export function HomeScreen() {
  // video logic for testing purposes
  const { setVideo, video } = useContext(PlayerContext);
  const onPress = () => {
    setVideo(video ? null : 'vxideo');
  };
  return (
    <SafeAreaView style={[appStyles.mainStyle, styles.wrapper]}>
      <Text>Home Screen</Text>
      {video && <Text>{video}</Text>}
      <Button title="SET VIDEO" onPress={onPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
