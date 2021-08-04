import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import Typography from '../Typography';
import styles, { buttonTextColors } from './styles';
import { colors } from '../../utils/theme';

interface Props {
  onPress?: () => void;
  text: string;
  compStyle?: ViewStyle;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const DefaultButton = ({ compStyle, onPress, text, textSize, variant = 'primary' }: Props) => {
  return (
    /* style={} or style={[]} */
    <TouchableOpacity style={[styles.mainContainer, styles[variant], compStyle]} onPress={onPress}>
      <Typography color={buttonTextColors[variant] || colors.white} size={textSize}>
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

// This way a default property value should be setted
DefaultButton.defaultProps = {
  compStyle: {},
  color: colors.mainOrange,
  textSize: 18,
  variant: 'primary',
};

export default DefaultButton;
