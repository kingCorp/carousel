import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import metrics from '../../theme/metrics';

const styles = StyleSheet.create({
  image: {
    height: metrics.screenHeight / 3,
    width: metrics.screenWidth / 4,
  },
  imgContainer: {
    backgroundColor: '#e2e2e2',
    marginHorizontal: 2,
    borderRadius: 5,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
  },
  activeIndicator: {
    backgroundColor: colors.gray,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  btnNext: {
    position: 'absolute',
    padding: 8,
    borderRadius: 15,
    backgroundColor: colors.primary,
    right: 5,
  },
  btnPrev: {
    position: 'absolute',
    padding: 8,
    borderRadius: 15,
    backgroundColor: colors.primary,
    left: 5,
  },
  btnText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnDisable: {
    backgroundColor: colors.secondary,
  },
});

export default styles;
