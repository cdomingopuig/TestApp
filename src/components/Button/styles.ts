import { StyleSheet } from 'react-native';

import { RAISIN_BLACK, WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: RAISIN_BLACK,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  title: {
    color: WHITE,
    fontWeight: '500',
  },
});

export default styles;
