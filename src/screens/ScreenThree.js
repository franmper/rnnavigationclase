import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import {useNavigationState} from '@react-navigation/native'

const ScreenThree = () => {
  const navigationState = useNavigationState(state => state)

  React.useEffect(() => {
    console.log(navigationState)
  }, [navigationState])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: StatusBar.currentHeight, backgroundColor:"#00296b"}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: "#ffd500"}}>ScreenThree</Text>
    </View>
  )
}

export default ScreenThree
