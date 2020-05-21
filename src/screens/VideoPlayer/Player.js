import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// TODO replace for video player
export class Player extends React.PureComponent {
  render() {
    const { style = {} } = this.props;
    return <View style={[styles.container, style]} />;
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height: width * 0.7,
    backgroundColor: 'gray',
  },
});
