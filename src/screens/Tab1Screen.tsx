import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableIcon} from '../components/TouchableIcon';
import {styles} from '../theme/appTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <TouchableIcon iconName="airplane-outline" />
      <TouchableIcon iconName="american-football-outline" />
      <TouchableIcon iconName="attach-outline" />
    </View>
  );
};
