import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity onPress={goBack}>
      <Text>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
