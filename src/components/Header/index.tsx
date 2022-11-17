import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import BackButton from 'components/BackButton';
import styles from './styles';

interface Props {
  title?: string;
}

const Header = ({ title }: Props) => {
  const { canGoBack } = useNavigation();

  return (
    <SafeAreaView edges={['top']} style={styles.header}>
      <View style={styles.container}>
        {canGoBack() && <BackButton />}
        {!!title && <Text style={styles.title}>{title}</Text>}
      </View>
    </SafeAreaView>
  );
};

export default Header;
