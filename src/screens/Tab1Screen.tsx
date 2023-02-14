import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {colors, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Icon name="airplane-outline" size={30} color={colors.primary} />
      <Icon name="american-football-outline" size={30} color={colors.primary} />
      <Icon name="attach-outline" size={30} color={colors.primary} />
    </View>
  );
};
