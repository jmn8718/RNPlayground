import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import { Description } from './Description';

export const VideoContent = function ({ video = {} }) {
  return (
    <ScrollView style={styles.content}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{video.title}</Text>
      </View>
      <Description description={video.description} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  titleWrapper: {
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
  },
});
