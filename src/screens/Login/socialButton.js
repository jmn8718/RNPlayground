import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export const SocialButton = ({
  text = 'BUTTON',
  name,
  image,
  onPress = () => {},
  noMarginBottom = false,
}) => {
  const wrapperStyle = { ...styles.wrapper };
  if (noMarginBottom) {
    wrapperStyle.paddingBottom = 0;
  }
  return (
    <TouchableOpacity onPress={onPress} style={wrapperStyle}>
      <View style={[styles.textWrapper, styles[name]]}>
        {image && (
          <Image
            source={image}
            style={styles.iconWrapper}
            resizeMode="contain"
          />
        )}
        <Text style={[styles.textStyle, styles[`${name}Text`]]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingBottom: 15,
  },
  textWrapper: {
    borderRadius: 25,
    height: 50,
    maxWidth: 335,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebook: {
    backgroundColor: 'rgb(30,80,153)',
  },
  facebookText: {
    color: 'rgb(255,255,255)',
  },
  google: {
    backgroundColor: 'rgb(230,230,230)',
  },
  googleText: {
    color: 'rgb(30,30,30)',
  },
  textStyle: {
    fontWeight: '600',
    color: 'white',
  },
  iconWrapper: {
    height: 42,
    width: 42,
    left: 10,
    position: 'absolute',
  },
});
