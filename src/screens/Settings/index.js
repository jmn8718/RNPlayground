import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles as appStyles } from '../../styles';

export function SettingsScreen() {
  return (
    <SafeAreaView style={[appStyles.mainStyle, styles.wrapper]}>
      <Text>Settings Screen</Text>
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
