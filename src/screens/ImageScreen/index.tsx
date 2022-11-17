import React, { useCallback, useEffect, useState } from 'react';
import { Image, ScrollView, Share, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import Button from 'components/Button';
import Header from 'components/Header';
import { RootStackParamList } from 'constants/types';
import styles from './styles';

type Props = {
  route: RouteProp<RootStackParamList, 'ImageScreen'>;
};

const ImageScreen = ({
  route: {
    params: {
      image: { url, location },
    },
  },
}: Props) => {
  const [aspectRatio, setAspectRatio] = useState(0);

  const handleShare = useCallback(() => {
    Share.share({ url });
  }, [url]);

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
        {!!location && (
          <Text style={styles.location}>Latitude: {location.latitude} </Text>
        )}
        {!!location && (
          <Text style={styles.location}>Longitude: {location.longitude} </Text>
        )}
        <Button onPress={handleShare} title="Share" style={styles.button} />
      </ScrollView>
    </>
  );
};

export default ImageScreen;
