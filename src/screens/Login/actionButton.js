import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getColor } from '../../styles/colors';

export const ActionButton = ({
  text = 'BUTTON',
  width = 200,
  onPress = () => {},
  disabled = false,
}) => {
  const insets = useSafeAreaInsets();
  const stateStyles = disabled ? styles.disabled : styles.enabled;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        ...styles.wrapper,
        ...stateStyles,
        paddingBottom: insets.bottom,
        marginTop: insets.top,
        width,
      }}>
      <View style={styles.textWrapper}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
  },
  disabled: {
    backgroundColor: getColor('DISABLED'),
  },
  enabled: {
    backgroundColor: getColor('PRIMARY'),
  },
  textWrapper: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
