import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 10,
    width: '80%',
    borderRadius: 50,
  },
  btnText: {
    alignSelf: 'center',
  },
  primaryButton: {
    backgroundColor: colors.mainOrange,
  },
  secondaryButton: {
    backgroundColor: 'white',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: colors.mainOrange,
  },
});

export default styles;
