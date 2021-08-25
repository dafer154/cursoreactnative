import React from 'react';
import { View } from 'react-native';
import { Typography, DefaultButton, Header } from '../../components';
import styles from './styles';
import { goToScreen } from '../../navigation/controls';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const HomeScreen = () => {
  return (
    <>
      <Header showBackButton={false} title="Home" />
      <View style={styles.mainContainer}>
        <Typography>Home Screen</Typography>
        <DefaultButton text="Go to experimental Screen" onPress={goToExperimentalScreen} />
      </View>
    </>
  );
};

export default HomeScreen;
