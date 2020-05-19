import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const LogoContainer = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ ...styles.wrapper, marginTop: -insets.top }}>
      <Text style={styles.textStyle}>LOGO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 60,
  },
  textStyle: {},
});
