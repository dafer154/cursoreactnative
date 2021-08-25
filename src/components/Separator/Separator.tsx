import React from 'react';
import { View } from 'react-native';

interface Props {
  isHorizontal?: boolean;
  separation: number;
}

const Separator = ({ isHorizontal, separation }: Props) => {
  return <View style={isHorizontal ? { width: separation } : { height: separation }} />;
};

export default Separator;
