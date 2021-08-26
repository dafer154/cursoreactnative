import React, { useState, useEffect } from 'react';
import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import { DefaultButton, DefaultModal, Typography, Separator, Header } from '../../components';
import styles from './styles';
import { colors } from '../../utils/theme';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const ExperimentalScreen = () => {
  const [IsModalVisible, setIsModalVisible] = useState(false);

  const showAlert = () => {
    setIsModalVisible(true);
  };

  const hideAlert = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    console.log('Inside useEffect');
  }, []);

  console.log('Inside Experimental Screen');

  return (
    <>
      <Header title="Experimental" />
      <SafeAreaView />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.mainContainer}>
          <Typography color={colors.mainOrange} size={30} variant="bold">
            Título
          </Typography>
          <View style={styles.subtitle}>
            <Typography variant="medium">Subtitulo</Typography>
          </View>
          <MaterialIcon name="search" size={30} color={colors.mainOrange} />
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
          <Separator separation={50} />
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            resizeMode="contain"
          />
          <Separator separation={50} />
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

export default ExperimentalScreen;
