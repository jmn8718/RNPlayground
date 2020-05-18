import React from 'react';
import { View, StyleSheet } from 'react-native';

export const ButtonsContainer = ({ children, width = 200 }) => (
  <View style={{ ...styles.wrapper, width }}>{children}</View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
