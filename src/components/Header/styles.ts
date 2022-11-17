import { StyleSheet } from 'react-native';

import { RAISIN_BLACK, WHITE } from 'constants/colors';
import { fullShadow } from 'constants/shadows';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  header: {
    ...fullShadow,
    backgroundColor: WHITE,
  },
  title: {
    color: RAISIN_BLACK,
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
