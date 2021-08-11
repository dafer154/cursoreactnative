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
const { NavigationContainer } = require('@react-navigation/native');
import { navigationRef } from './src/navigation/controls';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};

/**
 * This stylesheet calculates styles ONCE and avoids re rendering
 */
export default App;
