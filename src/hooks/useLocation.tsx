import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import usePermissionsAndroid from './usePermissionAndroid';

export default () => {
  const { checkPermission } = usePermissionsAndroid();

  const getLocation = (onSuccess: Function) => {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const location = { latitude, longitude };
        onSuccess(location);
      },
      () => {
        Alert.alert('Location access needed', '', [
          { text: 'Not now' },
          { text: 'Go to settings', onPress: () => Linking.openSettings() },
        ]);
      },
      { enableHighAccuracy: true },
    );
  };

  const requestLocation = async (onSuccess: Function) => {
    try {
      const granted = await checkPermission(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        'Location access',
        'Needed to take pictures',
      );
      if (granted) {
        getLocation(onSuccess);
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  };

  return Platform.OS === 'android' ? requestLocation : getLocation;
};
