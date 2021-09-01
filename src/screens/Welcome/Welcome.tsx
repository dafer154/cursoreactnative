import React, { useEffect } from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';
import { goToScreen, replaceRoute } from '../../navigation/controls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const goToMainTabs = async () => {
  replaceRoute('TabNavigator');
  try {
    await AsyncStorage.setItem('userLoggedInFlag', 'true');
    replaceRoute('TabNavigator');
  } catch (error) {
    console.log('Error storing userLoggedInFlag', error);
  }
};

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const checkIfUserIsLoggedIn = async () => {
  try {
    const value = await AsyncStorage.getItem('userLoggedInFlag');
    if (value !== null && value === 'true') {
      goToMainTabs();
    }
  } catch (error) {
    console.log('Error getting userLoggedInFlag', error);
  }
};

const WelcomeScreen = () => {
  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome Screen
      </Typography>
      <Separator separation={15} />
      <DefaultButton text="Go To Tabs" textSize={16} onPress={goToMainTabs} />
      <Separator separation={10} />
      <DefaultButton
        text="Go To Experimental Screen"
        textSize={16}
        onPress={goToExperimentalScreen}
        variant="secondary"
      />
    </View>
  );
};

export default WelcomeScreen;
