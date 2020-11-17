import React from 'react'
import { View, Text, Button } from 'react-native'
import {useNavigation} from '@react-navigation/native'

const Title = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Pantalla</Text>
      <Button title={"Go to Screen 2"} onPress={() => navigation.navigate("NavigatorOne", {
        screen: "ScreenTwo",
        params: { id: "djdj3939" }
      })}/>
    </View>
  )
}

export default Title
