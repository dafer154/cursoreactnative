import React, { useEffect, useState } from 'react';
import { View, Alert, SafeAreaView, ScrollView } from 'react-native';
import { Typography, DefaultButton, Separator } from '../../components';
import styles from './styles';
import { goToScreen } from '../../navigation/controls';

import { getAllBooks } from '../../services';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const HomeScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const dis = async () => {
      try {
        const { success, data } = await getAllBooks();
        if (success) {
          setBooks(data);
        } else {
          Alert.alert('Error getting on');
        }
      } catch (error) {
        console.log('Error', error);
        Alert.alert('Error getting on');
      }
    };
    dis();
  }, []);

  console.log('Inside HomeScreen');

  return (
    <>
      <SafeAreaView />
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContainer}>
          <Typography size={20} variant="bold">
            Home Screen
          </Typography>
          <Separator separation={10} />
          <DefaultButton text="Go To Experimental Screen" onPress={goToExperimentalScreen} />
          <Typography>{JSON.stringify(books, null, 2)}</Typography>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
