import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './styles';
import { colors } from '../../utils/theme';

interface Props {
  onPress: () => void;
  text: string;
  compStyle?: ViewStyle;
  color?: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const DefaultButton = ({ compStyle, onPress, text, textSize, variant }: Props) => {
  return (
    /* style={} or style={[]} */
    <TouchableOpacity
      style={[
        styles.mainContainer,
        compStyle,
        { backgroundColor: variant === 'primary' ? 'blue' : 'red' },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.btnText,
          { fontSize: textSize },
          { color: variant === 'primary' ? 'green' : 'black' },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

// This way a default property value should be setted
DefaultButton.defaultProps = {
  compStyle: {},
  color: colors.mainOrange,
  textSize: 14,
  variant: 'primary',
};

export default DefaultButton;
