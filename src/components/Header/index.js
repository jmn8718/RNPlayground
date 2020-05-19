import React, { useContext } from 'react';
import { View, Platform, TouchableHighlight, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles as appStyles } from '../../styles';
import { AppStoreContext } from '../../contexts';
import auth from '../../services/auth';

const UserIcon = function ({ user, onPress = () => {} }) {
  const iconName = user ? 'log-out' : 'log-in';
  return (
    <TouchableHighlight style={styles.iconRightWrapper} onPress={onPress}>
      <Icon
        name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-${iconName}`}
        size={30}
        color="black"
      />
    </TouchableHighlight>
  );
};

export const MainHeader = function ({ navigation }) {
  const { state, dispatch } = useContext(AppStoreContext);
  const insets = useSafeAreaInsets();

  const logout = async () => {
    dispatch({
      type: 'CLEAR_USER',
    });
    await auth.logout(state.provider);
  };
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ ...appStyles.mainHeader, paddingTop: insets.top }}>
      <View style={appStyles.mainHeaderContent}>
        <View style={appStyles.mainHeaderLeft}>{/* SET CONTENT */}</View>
        {/* <Text> TITLE </Text> */}
        <View style={appStyles.mainHeaderRight}>
          <UserIcon
            user={state.user}
            onPress={state.user ? logout : goToLogin}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconRightWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
