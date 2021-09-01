import React, { useEffect, useState } from 'react';
import { View, Alert, ActivityIndicator, FlatList } from 'react-native';
import { Typography, DefaultButton, Separator, Header } from '../../components';
import styles from './styles';
import { goToScreen } from '../../navigation/controls';
import { useNetInfo } from '@react-native-community/netinfo';
import { getAllBooks } from '../../services';
import { colors } from '../../utils/theme';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const ListItem = ({ title }: { title: string }) => (
  <View style={styles.listItemContainer}>
    <Typography>{title}</Typography>
  </View>
);

// @ts-ignore
const renderFlatlistItem = ({ item }) => <ListItem title={item.title} />;

const HomeScreen = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const netInfo = useNetInfo();

  const getBooksData = async () => {
    setLoading(true);
    try {
      const { success, data } = await getAllBooks();
      if (success) {
        setBooks(data);
      } else {
        Alert.alert('Error getting books on Home Screen');
      }
    } catch (error) {
      console.log('Error getting books, on Home Screen', error);
      Alert.alert('Error getting books, on Home Screen');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooksData();
  }, []);

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>You don't have internet :'(</Typography>
      </View>
    );
  }

  if (loading) {
    return (
      <>
        <Header showBackButton={false} title="Home Screen" />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.mainOrange} />
        </View>
      </>
    );
  }

  return (
    <>
      <Header showBackButton={false} title="Home Screen" />
      <View style={styles.mainContainer}>
        <Separator separation={10} />
        <DefaultButton text="Go To Experimental Screen" onPress={goToExperimentalScreen} />
        <Separator separation={10} />
        <FlatList
          refreshing={loading}
          onRefresh={getBooksData}
          data={books}
          renderItem={renderFlatlistItem}
          style={styles.flatList}
        />
      </View>
    </>
  );
};

export default HomeScreen;
