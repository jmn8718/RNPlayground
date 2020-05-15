import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen } from './screens/Main';
import { MainHeader } from './screens/Main/header';
import { LoginScreen } from './screens/Login';

import { AppStoreProvider } from './contexts';

const Stack = createStackNavigator();

const App = () => {
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
                headerShown: true,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                title: 'Login',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppStoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
