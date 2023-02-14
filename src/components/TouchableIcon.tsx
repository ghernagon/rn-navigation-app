import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {colors} from '../theme/appTheme';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  const {changeFavIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity>
      <Icon
        name={iconName}
        size={30}
        color={colors.primary}
        onPress={() => changeFavIcon(iconName)}
      />
    </TouchableOpacity>
  );
};
