import { StyleSheet } from 'react-native';
import { getColor } from './colors';

export const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: getColor('WHITE'),
  },
  tabBarStyle: {
    borderTopColor: getColor('LIGHT_GREY'),
    borderTopWidth: 1,
  },
  tabBarTabStyle: {
    height: 50,
    backgroundColor: getColor('WHITE'),
  },
});
