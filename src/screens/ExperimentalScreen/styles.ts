import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';
import { DEVICE_WIDTH } from '../../utils/dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.veryLightBlue,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  scrollContainer: {
    backgroundColor: colors.veryLightBlue,
  },
  subtitle: {
    marginBottom: 10,
  },
  title: {
    color: colors.mainOrange,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    marginTop: 5,
    minHeight: 100,
    width: DEVICE_WIDTH * 0.5,
  },
  text: {
    color: colors.mainOrange,
  },
  button: {
    width: '50%',
  },
});

export default styles;
