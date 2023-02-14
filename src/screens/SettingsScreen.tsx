import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {colors, styles} from '../theme/appTheme';

export const SettingsScreen = () => {
  const {authState} = useContext(AuthContext);
  const {favoriteIcon} = authState;

  return (
    <View>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>Context:</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {favoriteIcon && (
        <Icon name={favoriteIcon} size={150} color={colors.primary} />
      )}
    </View>
  );
};
