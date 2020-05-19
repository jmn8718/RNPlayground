import React, { useEffect } from 'react';
import { GoogleSignin } from '@react-native-community/google-signin';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen } from './screens/Main';
import { MainHeader } from './components/Header';
import { LoginScreen } from './screens/Login';

import { AppStoreProvider } from './contexts';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  return (
    <SafeAreaProvider>
      <AppStoreProvider>
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
                // headerTitleAlign: 'center',
                // headerBackTitleVisible: false,
                // title: 'Login',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppStoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
