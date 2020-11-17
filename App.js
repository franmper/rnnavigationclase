import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import StackNavaigator from "./src/navigators/StackNavigator"
import DrawerNavigator from './src/navigators/DrawerNavigator';
import BottomNavigator from './src/navigators/BottomNavigator'
import TopTabNavigator from './src/navigators/TopTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
