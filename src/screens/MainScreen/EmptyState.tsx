import React from 'react';
import { Image, Text, View } from 'react-native';

import emptyImage from 'assets/images/empty_gallery.jpg';
import styles from './styles';

const EmptyState = () => (
  <View>
    <Text style={styles.emptyTitle}>
      Oh! You haven't added images to your gallery yet.
    </Text>
    <Image source={emptyImage} style={styles.emptyImage} resizeMode="contain" />
  </View>
);

export default EmptyState;
