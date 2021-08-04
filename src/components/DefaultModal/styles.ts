import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainerModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertModal: {
    backgroundColor: colors.white,
    width: '65%',
    paddingBottom: 20,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  },
});

export default styles;
