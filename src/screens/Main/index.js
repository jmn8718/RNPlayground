import React from 'react';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HomeScreen } from '../Home';
import { DetailsScreen } from '../Details';
import { styles } from '../../styles';
import { getColor } from '../../styles/colors';

const Tab = createBottomTabNavigator();

export const MainScreen = function () {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Details') {
            iconName = 'settings';
          }
          iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-${iconName}`;
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: getColor('SECONDARY'),
        inactiveTintColor: getColor('WARM_GREY'),
        style: styles.tabBarStyle,
        tabStyle: { ...styles.tabBarTabStyle, paddingBottom: insets.bottom },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
};
