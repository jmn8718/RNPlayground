import { StyleSheet } from 'react-native';
import { getColor } from './colors';

const BACKGROUND_COLOR = getColor('WHITE');
export const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: BACKGROUND_COLOR,
  },
  tabBarStyle: {
    borderTopColor: getColor('LIGHT_GREY'),
    borderTopWidth: 1,
  },
  tabBarTabStyle: {
    height: 50,
    backgroundColor: BACKGROUND_COLOR,
  },
});
