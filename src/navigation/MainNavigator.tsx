import React from 'react';
const { createNativeStackNavigator } = require('@react-navigation/native-stack');
import { ExperimentalScreen, Welcome } from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  //for default choose the first screen
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
    <Stack.Screen name="Experimental" component={ExperimentalScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
