import React from 'react';
import { ExperimentalScreen } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  //for default choose the first screen
  <Stack.Navigator initialRouteName="AuthStack" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AuthStack" component={AuthStack} />
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="Experimental" component={ExperimentalScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
