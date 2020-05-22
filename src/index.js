import React, { useEffect } from 'react';
import { GoogleSignin } from '@react-native-community/google-signin';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Orientation from 'react-native-orientation-locker';

import { AppStoreProvider } from './contexts';
import { PlayerProvider } from './screens/VideoPlayer';
import { App } from './App';

export default () => {
  useEffect(() => {
    GoogleSignin.configure();
    // Lock screen to only work on portrait
    // TODO handle on fullscreen video
    Orientation.lockToPortrait();
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
