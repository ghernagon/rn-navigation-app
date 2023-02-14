import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import {CustomDrawerNavigator} from './src/navigator/CustomDrawerNavigator';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <DrawerNavigator /> */}
        <CustomDrawerNavigator />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
