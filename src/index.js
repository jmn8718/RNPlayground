import React, { useEffect } from 'react';
import { GoogleSignin } from '@react-native-community/google-signin';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppStoreProvider } from './contexts';
import { PlayerProvider } from './screens/VideoPlayer';
import { App } from './App';

export default () => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  return (
    <SafeAreaProvider>
      <AppStoreProvider>
        <PlayerProvider>
          <App />
        </PlayerProvider>
      </AppStoreProvider>
    </SafeAreaProvider>
  );
};
