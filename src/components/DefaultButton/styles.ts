import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.mainOrange,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 10,
    width: '80%',
  },
  btnText: {
    alignSelf: 'center',
  },
});

export default styles;
