import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';

import styles from './styles';

interface Props {
  onPress: () => void;
  style?: ViewStyle;
  title: string;
}

const Button = ({ onPress, title, style }: Props) => (
  <TouchableOpacity
    style={[styles.container, style]}
    onPress={onPress}
    activeOpacity={0.9}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
