import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// TODO add content functionality
export const Description = function ({ description = '' }) {
  return (
    <View style={styles.content}>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {},
});
