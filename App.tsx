/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from './src/navigation/controls';
import MainNavigator from './src/navigation/MainNavigator';
import { API_URL } from './src/config/envVariable';

const App = () => {
  console.log('OME sisa', API_URL);
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

/**
 * This stylesheet calculates styles ONCE and avoids re rendering
 */
export default App;
