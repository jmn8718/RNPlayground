import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen } from './screens/Main';
import { LoginScreen } from './screens/Login';

import { AppStoreProvider } from './contexts';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <AppStoreProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppStoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
