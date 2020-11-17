import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import ScreenOne from '../screens/ScreenOne'
import ScreenTwo from '../screens/ScreenTwo'
import { AntDesign } from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Navigator tabBarOptions={{
      activeBackgroundColor: "#ffd500",
      inactiveBackgroundColor: "#003f88",
      activeTintColor: "#003f88",
      inactiveTintColor: "#ffd500"
    }}>
    <Screen name={"Home"} component={Home} options={{
      tabBarIcon: () => <AntDesign name="home" size={24} color="black" />
    }}/>
    <Screen name={"ScreenOne"} component={ScreenOne} options={{
      tabBarIcon: () => <AntDesign name="info" size={24} color="black" />,
      tabBarLabel: "React Native"
    }}/>
    <Screen name={"ScreenTwo"} component={ScreenTwo} options={{
      tabBarIcon: () => <AntDesign name="question" size={24} color="red" />
    }}/>
  </Navigator>
  )
}

export default BottomNavigator
