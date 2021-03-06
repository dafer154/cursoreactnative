import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExperimentalScreen, Welcome } from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  //for default choose the first screen
  <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
    <Stack.Screen name="Experimental" component={ExperimentalScreen} />
  </Stack.Navigator>
);

export default AuthStack;
