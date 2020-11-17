import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Home from '../screens/Home';
import ScreenOne from '../screens/ScreenOne'
import ScreenTwo from '../screens/ScreenTwo'
import { AntDesign } from '@expo/vector-icons';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Navigator 
    style={{paddingTop: StatusBar.currentHeight}}
    lazy={true}
    tabBarOptions={{
      activeTintColor: "#003f88",
      inactiveTintColor: "#000"
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

export default TopTabNavigator
