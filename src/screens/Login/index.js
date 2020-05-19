import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import auth from '../../services/auth';
import { styles as appStyles } from '../../styles';
import { ButtonsContainer } from './container';
import { LogoContainer } from './logo';
import { SocialButton } from './socialButton';
import { getColor } from '../../styles/colors';
import { AppStoreContext } from '../../contexts';

const { width } = Dimensions.get('window');

export function LoginScreen({ navigation }) {
  const { dispatch } = useContext(AppStoreContext);

  const onLoginComplete = function (user, provider) {
    dispatch({
      type: 'SET_USER',
      payload: {
        user,
        provider,
      },
    });
    navigation.goBack();
  };

  const fbLogin = async function () {
    try {
      const user = await auth.facebookLogin();
      onLoginComplete(user, 'facebook');
    } catch (err) {
      console.log(err);
    }
  };

  const googleLogin = async function () {
    try {
      const user = await auth.googleLogin();
      onLoginComplete(user, 'google');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={[appStyles.mainStyle, styles.wrapper]}>
      <LogoContainer />
      <ButtonsContainer width={width}>
        <SocialButton
          image={require('./icons/icGoogle.png')}
          text="GOOGLE"
          name="google"
          onPress={googleLogin}
        />
        <SocialButton
          image={require('./icons/icFacebook.png')}
          text="FACEBOOK"
          name="facebook"
          onPress={fbLogin}
          noMarginBottom
        />
      </ButtonsContainer>
      <View style={styles.bottomWrapper} />
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
  bottomWrapper: {
    flex: 1,
  },
});
