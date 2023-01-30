import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      {/* <Button
        title="Go to person"
        onPress={() => navigation.navigate('PersonScreen')}
      /> */}

      <Text>Navigate with arguments</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.bigButton, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Brent',
            })
          }>
          <Text style={styles.bigButtonText}>Go to person</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bigButton}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Satya',
            })
          }>
          <Text style={styles.bigButtonText}>Go to person 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
