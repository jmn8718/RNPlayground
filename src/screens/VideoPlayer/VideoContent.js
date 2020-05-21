import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

// TODO add content functionality
export const VideoContent = function () {
  return (
    <ScrollView>
      <View style={styles.content}>
        <Text>Content</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
});
