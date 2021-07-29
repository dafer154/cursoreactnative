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
import { StyleSheet, Modal, View, Text, Image } from 'react-native';

import { DefaultButton } from './src/components';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH } from './src/utils/dimensions';

// const showAlert = () => {
//   Alert.alert('Hola');
// };

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  /*
    This will rerender the app
    const showAlert = () => {
        Alert.alert('hola!');
    }; */

  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Texto</Text>
      <Text>Subtitulo</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <DefaultButton compStyle={styles.button} onPress={showModal} text="Motrar hola mundo" />
      <Modal visible={isModalVisible} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.2)',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: colors.white,
              width: '65%',
              paddingBottom: 20,
              paddingTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 13,
            }}
          >
            <Text style={{ marginVertical: 20 }}>Hola mundo</Text>
            <DefaultButton onPress={hideModal} text="Ok" compStyle={{ height: 40 }}></DefaultButton>
          </View>
        </View>
      </Modal>
    </View>
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
