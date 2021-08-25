import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';
import { goToScreen, replaceRoute } from '../../navigation/controls';

const WelcomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome Screen
      </Typography>
      <Separator separation={15} />
      <DefaultButton text="Go To Tabs" textSize={16} onPress={() => replaceRoute('TabNavigator')} />
      <Separator separation={10} />
      <DefaultButton
        text="Go To Experimental Screen"
        textSize={16}
        onPress={() => goToScreen('Experimental')}
        variant="secondary"
      />
    </View>
  );
};

export default WelcomeScreen;
