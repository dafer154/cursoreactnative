import React from 'react';
import { View } from 'react-native';
import { DefaultButton, Typography } from '../../components';
import { goToScreen, resetNavigation } from '../../navigation/controls';
import styles from './styles';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const HistoryScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography>History Screen</Typography>
      <DefaultButton text="Go to experimental Screen" onPress={goToExperimentalScreen} />
      <DefaultButton variant="secondary" text="Log out" onPress={resetNavigation} />
    </View>
  );
};

export default HistoryScreen;
