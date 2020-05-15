import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../Home';
import { DetailsScreen } from '../Details';
import { styles } from '../../styles';
import { getColor } from '../../styles/colors';

const Tab = createBottomTabNavigator();

export const MainScreen = function () {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: getColor('SECONDARY'),
        inactiveTintColor: getColor('WARM_GREY'),
        style: styles.tabBarStyle,
        tabStyle: styles.tabBarTabStyle,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
};
