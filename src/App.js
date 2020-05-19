import React, { useEffect, useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen } from './screens/Main';
import { MainHeader } from './components/Header';
import { LoginScreen } from './screens/Login';

import { AppStoreContext } from './contexts';
import { STORE_KEYS, getObject } from './services/storage';

const Stack = createStackNavigator();

export const App = () => {
  const { dispatch } = useContext(AppStoreContext);
  useEffect(() => {
    populateStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const populateStore = async function () {
    const payload = await getObject(STORE_KEYS.USER);
    if (payload) {
      dispatch({
        type: 'SET_USER',
        payload,
      });
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            header: MainHeader,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
