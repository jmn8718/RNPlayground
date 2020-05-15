import { StyleSheet } from 'react-native';
import { getColor } from './colors';

const BACKGROUND_COLOR = getColor('WHITE');
const HEADER_HEIGHT = 50;

export const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: BACKGROUND_COLOR,
  },
  mainHeader: {
    backgroundColor: getColor('WHITE'),
    borderBottomColor: getColor('LIGHT_GREY'),
    borderBottomWidth: 1,
    paddingTop: 0,
  },
  mainHeaderContent: {
    minHeight: HEADER_HEIGHT,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  mainHeaderLeft: {
    width: HEADER_HEIGHT,
    height: HEADER_HEIGHT,
  },
  mainHeaderRight: {
    width: HEADER_HEIGHT,
    height: HEADER_HEIGHT,
  },
  tabBarStyle: {
    borderTopColor: getColor('LIGHT_GREY'),
    borderTopWidth: 1,
    paddingBottom: 0,
  },
  tabBarTabStyle: {
    // height: 50,
  },
});
