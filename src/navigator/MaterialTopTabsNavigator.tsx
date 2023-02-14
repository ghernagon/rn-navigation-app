import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AlbumsScreen, ChatScreen, ContactsScreen} from '../screens';
import {colors} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const MaterialTopTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary, // TEXT COLOR
        // tabBarStyle: {backgroundColor: 'powderblue'}, // TAB BAR
        tabBarIndicatorStyle: {backgroundColor: colors.primary}, // LINE
        tabBarPressColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'beer-outline';
              break;
            case 'ContactsScreen':
              iconName = 'boat-outline';
              break;
            case 'AlbumsScreen':
              iconName = 'bicycle-outline';
              break;
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
