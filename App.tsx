/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './src/screens/MainScreen';
import ImageScreen from './src/screens/ImageScreen';
import { HOME_SCREEN, IMAGE_SCREEN } from './src/constants/screens';
import { RootStackParamList } from './src/constants/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={HOME_SCREEN} component={MainScreen} />
        <Stack.Screen name={IMAGE_SCREEN} component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
