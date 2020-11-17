import React from 'react'
import { View, Text } from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home';
import ScreenOne from '../screens/ScreenOne'
import ScreenTwo from '../screens/ScreenTwo'
import { AntDesign } from '@expo/vector-icons';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Navigator >
      <Screen name={"Home"} component={Home} options={{
        drawerIcon: () => <AntDesign name="home" size={24} color="black" />
      }}/>
      <Screen name={"ScreenOne"} component={ScreenOne} options={{
        drawerIcon: () => <AntDesign name="info" size={24} color="black" />,
        drawerLabel: "React Native"
      }}/>
      <Screen name={"ScreenTwo"} component={ScreenTwo} options={{
        drawerIcon: () => <AntDesign name="question" size={24} color="red" />
      }}/>
    </Navigator>
  )
}

export default DrawerNavigator
