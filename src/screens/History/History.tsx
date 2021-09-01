import React from 'react';
import { View } from 'react-native';
import { DefaultButton, Typography, Header } from '../../components';
import { goToScreen, resetNavigation } from '../../navigation/controls';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const logOut = async () => {
  try {
    await AsyncStorage.setItem('userLoggedInFlag', 'false');
    resetNavigation();
  } catch (error) {
    console.log('Error storing userLoggedInFlag', error);
  }
};

const HistoryScreen = () => {
  return (
    <>
      <Header showBackButton={true} title="History" />
      <View style={styles.mainContainer}>
        <Typography>History Screen</Typography>
        <DefaultButton text="Go to experimental Screen" onPress={goToExperimentalScreen} />
        <DefaultButton variant="secondary" text="Log out" onPress={logOut} />
      </View>
    </>
  );
};

export default HistoryScreen;
