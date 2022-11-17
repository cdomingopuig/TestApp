import { useCallback } from 'react';
import { Alert, Linking, PermissionsAndroid } from 'react-native';

export default () => {
  const checkPermission = useCallback(
    async (
      permission: any,
      permissionsTitle: string,
      permissionsDescription: string | undefined,
    ) => {
      const result = await PermissionsAndroid.request(permission);
      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permission granted');
        return true;
      } else {
        console.log('permission denied');
        Alert.alert(permissionsTitle, permissionsDescription, [
          { text: 'Not now' },
          { text: 'Go to settings', onPress: () => Linking.openSettings() },
        ]);
      }
      return false;
    },
    [],
  );

  return { checkPermission };
};
