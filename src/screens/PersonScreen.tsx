import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

// type RouteParams = {
//   id: number;
//   name: string;
// };

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({route, navigation}: Props) => {
  // const params = route.params as RouteParams;
  const params = route.params;

  console.log(params);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PersonScreen</Text>
    </View>
  );
};
