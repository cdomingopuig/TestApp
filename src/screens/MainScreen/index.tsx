import React, { useCallback } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import { IMAGE_SCREEN } from '../../constants/screens';
import styles from './styles';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1506371712237-a03dca697e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80',
  },
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

const MainScreen = ({ navigation }) => {
  const renderItem = useCallback(
    ({ item, item: { url } }) => (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate(IMAGE_SCREEN, { image: item })}>
        <Image style={styles.image} source={{ uri: url }} />
      </TouchableOpacity>
    ),
    [navigation],
  );

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
      />
      <View style={styles.footer}>
        <SafeAreaView edges={['bottom']}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Take Picture</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default MainScreen;
