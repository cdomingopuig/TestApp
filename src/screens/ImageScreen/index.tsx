import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import Header from '../../components/Header';
import styles from './styles';
import { RootStackParamList } from '../../constants/types';

type Props = {
  route: RouteProp<RootStackParamList, 'ImageScreen'>;
};

const ImageScreen = ({
  route: {
    params: {
      image: { url, location = 'Random' },
    },
  },
}: Props) => {
  const [aspectRatio, setAspectRatio] = useState(0);

  useEffect(() => {
    Image.getSize(url, (width, height) => setAspectRatio(width / height));
  }, [url]);

  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={{ uri: url }}
          style={[styles.image, { aspectRatio }]}
          resizeMode="contain"
        />
        <Text style={styles.location}>Location: {location} </Text>
      </ScrollView>
    </>
  );
};

export default ImageScreen;
