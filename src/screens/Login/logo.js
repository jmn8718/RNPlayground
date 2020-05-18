import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const LogoContainer = ({ children, width = 200 }) => (
  <View style={styles.wrapper}>
    <Text style={styles.textStyle}>LOGO</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 60,
  },
  textStyle: {},
});
