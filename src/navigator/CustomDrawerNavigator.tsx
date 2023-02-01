/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';

export type RootDrawerParams = {
  StackNavigator: undefined;
  SettingsScreen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const CustomDrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        drawerType: width >= 768 ? 'permanent' : 'front', // Change drawer type for landscape
        headerShown: width >= 768 ? false : true, // Hide header for landscape
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar container */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAewMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQQFAwIH/8QAMRABAAICAQEGAwUJAAAAAAAAAAECAxEEUQUSITEyQWFxciIjMzSBE1KCkaGxwdHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A+qAKgAAAAAAAAAAAAAAAAAAAADzOXHE6nJSP4oB6EVtW3ptE/KUgAAAAAAAAAAOPI5NcMaiN39o/27TMREzPlDHyWm97Wn3nYPWXPky+q3h0jycwUPfa1x+Zamq5PGvX3hVAbUTExExO4kV+BbvceI/dmYWEAAAAAAAAHPk+GDJ9Mslq8maxgv3p1Expk7BIg2okRs2DQ7On7u8dLLal2dNdXjfjvel1AAAAAAAABw50b49v0n+rL02clO/S1J8NxrbJy0nHktSfHQPGjSRRBpIC12dX7209IaCvw8M4se5nc21PyWEAAAAAAAABR7QxTFoyRHh5SvOPM/LX/wC9wZYCg6cfHOXLWsfOfk5rXZ341vpBoR5AIAAAAAE2iI3M6jqAOF+Zhr5Wm0/CFbJzrz4Uju/HzkF3Jkrjr3rzEdN+7My58mWftz9npHk8WmbTM2mZnrKFAABNbWrbdbTE9YQA0OLyf2kd3JaO/wDy2tMV2xcrLj9+9HSyDUFXHzqT64ms/DxhYx5ceT0XiQegARe0VrNrTqIjcsrNmtmtu3l7R0aHN/LX/T+7LIACgAAAAAAAARMxO4nUx5ADT4mec1Ji3qr5/F3Z/Z349vp/zDQQf//Z',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Menu options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuItemText}>Stack Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
