import React from 'react';
import { View } from 'react-native';
import { Typography, Header, DefaultButton } from '../../components';
import styles from './styles';
import { goToScreen, resetNavigation } from '../../navigation/controls';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Header onPress={resetNavigation} text={'Back'} />
      <Typography>Home Screen</Typography>
      <DefaultButton text="Go to experimental Screen" onPress={goToExperimentalScreen} />
    </View>
  );
};

export default HomeScreen;
