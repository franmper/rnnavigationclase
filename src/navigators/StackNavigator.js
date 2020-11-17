import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import ScreenOne from '../screens/ScreenOne'
import NavigatorOne from './NavigatorOne'

const {Navigator, Screen} = createStackNavigator()

const StackNavigator = () => {
  return (
    <Navigator>
      <Screen name={"Home"} component={Home}/>
      <Screen name={"ScreenOne"} component={ScreenOne}/>
      <Screen name={"NavigatorOne"} component={NavigatorOne}/>
    </Navigator>
  )
}

export default StackNavigator
