import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Title from '../component/Title'

const ScreenOne = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: StatusBar.currentHeight, backgroundColor:"#00296b"}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: "#ffd500"}}>ScreenOne</Text>
      <Title />
    </View>
  )
}

export default ScreenOne
