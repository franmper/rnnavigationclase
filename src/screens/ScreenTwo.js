import React from 'react'
import { View, Text, StatusBar, Button } from 'react-native'
import {useRoute, useNavigation} from '@react-navigation/native'

const ScreenTwo = () => {
  const route = useRoute()
  const navigation = useNavigation()

  React.useEffect(() => {
    console.log(route)
  }, [route])
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: StatusBar.currentHeight, backgroundColor:"#00296b"}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: "#ffd500"}}>ScreenTwo</Text>
      <Button title={"Go to Screen 3"} onPress={() => navigation.navigate("ScreenThree")} />
    </View>
  )
}

export default ScreenTwo
