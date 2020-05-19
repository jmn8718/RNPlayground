import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

import { styles as appStyles } from '../../styles';
import { ButtonsContainer } from './container';
import { LogoContainer } from './logo';
import { ActionButton } from './actionButton';
import { SocialButton } from './socialButton';
import { getColor } from '../../styles/colors';

const { width } = Dimensions.get('window');

export function LoginScreen({ navigation }) {
  const getFBUserInfo = async function () {
    try {
      const infoRequest = new GraphRequest('/me', null, (err, result) => {
        console.log({ err, result });
      });
      new GraphRequestManager().addRequest(infoRequest).start();
    } catch (err) {
      console.log(err);
    }
  };
  const fbLogin = async function () {
    try {
      let data = await AccessToken.getCurrentAccessToken();
      if (!data || !data.accessToken) {
        const result = await LoginManager.logInWithPermissions([
          'public_profile',
          'email',
        ]);

        if (!result.isCancelled) {
          data = await AccessToken.getCurrentAccessToken();
        }
      }
      if (data && data.accessToken) {
        getFBUserInfo();
      } else {
        // TODO show message
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async function () {
    try {
      await LoginManager.logOut();
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
        />
        <SocialButton
          image={require('./icons/icFacebook.png')}
          text="FACEBOOK"
          name="facebook"
          onPress={fbLogin}
          noMarginBottom
        />
      </ButtonsContainer>
      <View style={styles.actionButtonWrapper}>
        <ActionButton text="LOGOUT" width={width} onPress={logout} />
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
