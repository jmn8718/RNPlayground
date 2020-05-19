import React, { useEffect } from 'react';
import { GoogleSignin } from '@react-native-community/google-signin';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppStoreProvider } from './contexts';
import { App } from './App';

export default () => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  return (
    <SafeAreaProvider>
      <AppStoreProvider>
        <App />
      </AppStoreProvider>
    </SafeAreaProvider>
  );
};
