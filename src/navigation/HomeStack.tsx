import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExperimentalScreen, HomeScreen } from '../screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  //for default choose the first screen
  <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Experimental" component={ExperimentalScreen} />
  </Stack.Navigator>
);

export default HomeStack;
