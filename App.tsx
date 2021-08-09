/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native';

import { DefaultButton, DefaultModal, Typography } from './src/components';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH } from './src/utils/dimensions';

const App = () => {
  const [IsModalVisible, setIsModalVisible] = useState(false);

  const showAlert = () => {
    setIsModalVisible(true);
  };

  const hideAlert = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <SafeAreaView />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.mainContainer}>
          <Typography color={colors.mainOrange} size={30} variant="bold">
            Título
          </Typography>
          <View style={styles.subtitle}>
            <Typography variant="medium">Subtitulo</Typography>
          </View>
          <Typography color={colors.white} variant="regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquid ipsum odio?
            Culpa illo nobis dolore voluptate quasi cum, quisquam ex blanditiis adipisci hic unde
            itaque doloremque ducimus? Provident, sit! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequatur aliquid ipsum odio? Culpa illo nobis dolore voluptate
            quasi cum, quisquam ex blanditiis adipisci hic unde itaque doloremque ducimus?
            Provident, sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            aliquid ipsum odio? Culpa illo nobis dolore voluptate quasi cum, quisquam ex blanditiis
            adipisci hic unde itaque doloremque ducimus? Provident, sit!
          </Typography>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            resizeMode="contain"
          />
          <DefaultButton
            compStyle={styles.button}
            text="Mostrar Hola Mundo"
            onPress={showAlert}
            variant="secondary"
          />
          <DefaultModal
            isModalVisible={IsModalVisible}
            text="Hello World"
            actionButtonText="Ok"
            onModalAction={hideAlert}
          />
        </View>
      </ScrollView>
    </>
  );
};

/**
 * This stylesheet calculates styles ONCE and avoids re rendering
 */
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.veryLightBlue,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  scrollContainer: {
    backgroundColor: 'red',
  },
  subtitle: {
    marginBottom: 10,
  },
  title: {
    color: colors.mainOrange,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    marginTop: 5,
    minHeight: 100,
    width: DEVICE_WIDTH * 0.5,
  },
  text: {
    color: colors.mainOrange,
  },
  button: {
    width: '50%',
  },
});

export default App;
