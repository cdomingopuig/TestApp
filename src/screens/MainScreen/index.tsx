import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp } from '@react-navigation/native';
import { launchCamera } from 'react-native-image-picker';

import Button from 'components/Button';
import Header from 'components/Header';
import { RAISIN_BLACK } from 'constants/colors';
import { IMAGE_SCREEN } from 'constants/screens';
import { ImageProp, LocationProp } from 'constants/types';
import useLocation from 'hooks/useLocation';
import EmptyState from './EmptyState';
import styles from './styles';

interface Props {
  navigation: NavigationProp<any, any>;
}

const MainScreen = ({ navigation }: Props) => {
  const [images, setImages] = useState<Array<ImageProp>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getLocation = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('images');
        const imgs = JSON.parse(jsonValue || '');
        if (imgs.length > 0) {
          setImages(imgs);
        }
      } catch (e) {
        console.log('Error retrieving images from async storage: ', e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const storeData = async () => {
      try {
        if (images.length > 0) {
          const jsonValue = JSON.stringify(images);
          await AsyncStorage.setItem('images', jsonValue);
        }
      } catch (e) {
        console.log('Error saving images in the async storage: ', e);
      }
    };
    storeData();
  }, [images]);

  const renderItem = useCallback(
    ({ item, item: { url } }: { item: ImageProp }) => (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate(IMAGE_SCREEN, { image: item })}>
        <Image style={styles.image} source={{ uri: url }} />
      </TouchableOpacity>
    ),
    [navigation],
  );

  const openCamera = useCallback(() => {
    getLocation((location?: LocationProp) => {
      try {
        launchCamera(
          { mediaType: 'photo', includeBase64: true, saveToPhotos: false },
          async ({ assets }) => {
            if (assets && assets[0]) {
              const newImage: ImageProp = {
                url: `data:image/jpeg;base64,${assets[0].base64}`,
                location,
              };
              setImages(auxImages => [...auxImages, newImage]);
            }
          },
        );
      } catch (e) {
        console.log(e);
      }
    });
  }, [getLocation]);

  return (
    <View style={styles.container}>
      <Header title="Eureka" />
      <FlatList
        style={styles.flex}
        contentContainerStyle={styles.content}
        data={images}
        numColumns={3}
        keyExtractor={(_, i) => `image-${i}`}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={styles.empty}>
            {loading ? (
              <ActivityIndicator size="large" color={RAISIN_BLACK} />
            ) : (
              <EmptyState />
            )}
          </View>
        }
      />
      <View style={styles.footer}>
        <SafeAreaView edges={['bottom']}>
          <Button
            style={styles.button}
            title="Take Picture"
            onPress={openCamera}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default MainScreen;
