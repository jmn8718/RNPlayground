import 'react-native-gesture-handler';
import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './screens/Home';
import { DetailsScreen } from './screens/Details';

import { AppStoreProvider } from './contexts';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <AppStoreProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppStoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
