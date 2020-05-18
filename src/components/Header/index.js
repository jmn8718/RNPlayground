import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../../styles';

export const MainHeader = function () {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ ...styles.mainHeader, paddingTop: insets.top }}>
      <View style={styles.mainHeaderContent}>
        <View style={styles.mainHeaderLeft}>{/* SET CONTENT */}</View>
        {/* <Text> TITLE </Text> */}
        <View style={styles.mainHeaderRight}>{/* SET CONTENT */}</View>
      </View>
    </View>
  );
};
