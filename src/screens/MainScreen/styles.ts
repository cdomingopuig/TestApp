import { StyleSheet } from 'react-native';

import { RAISIN_BLACK, WHITE } from 'constants/colors';
import { fullShadow } from 'constants/shadows';

const styles = StyleSheet.create({
  button: fullShadow,
  buttonText: {
    color: WHITE,
    fontWeight: '500',
  },
  container: {
    backgroundColor: WHITE,
    flex: 1,
  },
  content: {
    paddingBottom: 100,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  empty: {
    flexShrink: 1,
    paddingTop: '40%',
  },
  emptyImage: {
    alignSelf: 'center',
    height: 300,
    width: 300,
  },
  emptyTitle: {
    color: RAISIN_BLACK,
    fontSize: 18,
    marginHorizontal: 30,
    textAlign: 'center',
  },
  flex: {
    flex: 1,
  },
  footer: {
    bottom: 0,
    left: 16,
    position: 'absolute',
    paddingBottom: 16,
    right: 16,
  },
  image: {
    flex: 1,
    margin: 4,
  },
  item: {
    aspectRatio: 1,
    flex: 1 / 3,
  },
});

export default styles;
