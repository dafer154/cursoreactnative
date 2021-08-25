import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Typography from '../Typography';

interface Props {
  onPress?: () => void;
  text?: string;
}

const Header = ({ onPress, text }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.header}>
        <Typography>{text}</Typography>
      </View>
    </TouchableOpacity>
  );
};

export default Header;
