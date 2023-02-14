import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform} from 'react-native';
import {Tab1Screen} from '../screens/Tab1Screen';
// import {Tab2Screen} from '../screens/Tab2Screen';
import {colors} from '../theme/appTheme';
// import {Tab3Screen} from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MaterialTopTabsNavigator} from './MaterialTopTabsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const BottomTabsNavigator = () => {
  return Platform.OS === 'ios' ? (
    <BottomTabsNavigatorIOS />
  ) : (
    <BottomTabsNavigatorAndroid />
  );
};

// ANDROID
const BottomTabsAndroid = createMaterialBottomTabNavigator();

const BottomTabsNavigatorAndroid = () => {
  return (
    <BottomTabsAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          // borderTopWidth: 2,
          // elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'alarm-outline';
              break;
            case 'Tab2Screen':
              iconName = 'bandage-outline';
              break;
            case 'StackNavigator':
              iconName = 'basketball-outline';
              break;
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}>
      <BottomTabsAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        // options={{title: 'Tab1', tabBarIcon: ({ color, size }) => <Text>T1</Text>}}
        component={Tab1Screen}
      />
      <BottomTabsAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={MaterialTopTabsNavigator}
      />
      <BottomTabsAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabsAndroid.Navigator>
  );
};

// IOS
const BottomTabsIOS = createBottomTabNavigator();

const BottomTabsNavigatorIOS = () => {
  return (
    <BottomTabsIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          // borderTopWidth: 2,
          // elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'alarm-outline';
              break;
            case 'Tab2Screen':
              iconName = 'bandage-outline';
              break;
            case 'StackNavigator':
              iconName = 'basketball-outline';
              break;
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
        headerShown: false,
      })}>
      <BottomTabsIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        // options={{title: 'Tab1', tabBarIcon: ({ color, size }) => <Text>T1</Text>}}
        component={Tab1Screen}
      />
      <BottomTabsIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={MaterialTopTabsNavigator}
      />
      <BottomTabsIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabsIOS.Navigator>
  );
};
