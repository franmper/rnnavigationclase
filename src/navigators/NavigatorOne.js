import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenTwo from '../screens/ScreenTwo'
import ScreenThree from '../screens/ScreenThree'

const {Navigator, Screen} = createStackNavigator()

const NavigatorOne = () => {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name={"ScreenTwo"} component={ScreenTwo}/>
      <Screen name={"ScreenThree"} component={ScreenThree}/>
    </Navigator>
  )
}

export default NavigatorOne
