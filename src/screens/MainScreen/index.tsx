import React, { useCallback } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import styles from './styles';

const images = [
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  {
    url: 'https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=',
  },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  {
    url: 'https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=',
  },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  {
    url: 'https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=',
  },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  {
    url: 'https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=',
  },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  {
    url: 'https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=',
  },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
  { url: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
];

const MainScreen = () => {
  const renderItem = useCallback(({ item: { url } }) => {
    return (
      <View style={{ flex: 1 / 3, aspectRatio: 1 }}>
        <Image style={{ flex: 1, margin: 4 }} source={{ uri: url }} />
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingTop: 12, paddingBottom: 80, paddingHorizontal: 12 }}
        data={images}
        numColumns={3}
        keyExtractor={(_, i) => `image-${i}`}
        renderItem={renderItem}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: '#E4C3AD',
          paddingTop: 8,
        }}>
        <SafeAreaView edges={['bottom']}>
          <TouchableOpacity
            style={{
              backgroundColor: '#0D1F2D',
              paddingVertical: 4,
              paddingHorizontal: 8,
              borderRadius: 16,
              alignSelf: 'center',
            }}>
            <Text style={{ color: 'white' }}>Take Picture</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default MainScreen;
