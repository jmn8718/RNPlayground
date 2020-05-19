import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import auth from '../../services/auth';
import { styles as appStyles } from '../../styles';
import { ButtonsContainer } from './container';
import { LogoContainer } from './logo';
import { SocialButton } from './socialButton';
import { getColor } from '../../styles/colors';
import { AppStoreContext } from '../../contexts';
import { storeObject, STORE_KEYS } from '../../services/storage';

const { width } = Dimensions.get('window');

const HEADER_HEIGHT = 50;

export function LoginScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const { dispatch } = useContext(AppStoreContext);

  const onLoginComplete = function (user, provider) {
    const payload = {
      user,
      provider,
    };
    dispatch({
      type: 'SET_USER',
      payload,
    });
    storeObject(STORE_KEYS.USER, payload);
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

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[appStyles.mainStyle, styles.wrapper]}>
      <View style={{ ...styles.headerRow, marginTop: insets.top }}>
        <TouchableOpacity
          onPress={onPressBack}
          activeOpacity={0.5}
          style={styles.headerAction}>
          <Icon
            name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-arrow-back`}
            size={30}
            color={getColor('BLACK')}
          />
        </TouchableOpacity>
      </View>
      <LogoContainer />
      <ButtonsContainer width={width}>
        <SocialButton
          image={require('../../assets/icons/icGoogle.png')}
          text="GOOGLE"
          name="google"
          onPress={googleLogin}
        />
        <SocialButton
          image={require('../../assets/icons/icFacebook.png')}
          text="FACEBOOK"
          name="facebook"
          onPress={fbLogin}
          noMarginBottom
        />
      </ButtonsContainer>
      <View style={{ ...styles.bottomWrapper, marginBottom: insets.bottom }} />
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
  headerRow: {
    flex: 0,
    height: HEADER_HEIGHT,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 30,
  },
  headerAction: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
