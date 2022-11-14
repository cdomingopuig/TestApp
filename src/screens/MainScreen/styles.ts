import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0D1F2D',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 100,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  flex: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#E4C3AD',
    paddingTop: 16,
    paddingHorizontal: 16,
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
