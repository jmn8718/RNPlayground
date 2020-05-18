import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import { styles as appStyles } from '../../styles';
import { ButtonsContainer } from './container';
import { LogoContainer } from './logo';
import { ActionButton } from './actionButton';
import { SocialButton } from './socialButton';
import { getColor } from '../../styles/colors';

const { width } = Dimensions.get('window');

export function LoginScreen({ navigation }) {
  return (
    <View style={[appStyles.mainStyle, styles.wrapper]}>
      <LogoContainer />
      <ButtonsContainer width={width}>
        <SocialButton
          image={require('./icons/icGoogle.png')}
          text="GOOGLE"
          name="google"
        />
        <SocialButton
          image={require('./icons/icFacebook.png')}
          text="FACEBOOK"
          name="facebook"
          noMarginBottom
        />
      </ButtonsContainer>
      <View style={styles.actionButtonWrapper}>
        <ActionButton text="LOGIN" width={width} disabled />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: getColor('LIGHTER_GREY'),
  },
  actionButtonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
