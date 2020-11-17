import React from 'react'
import { View, Text, StatusBar, Button } from 'react-native'

const Home = ({navigation}) => {
  React.useEffect(data.data)

  React.useEffect(() => {
    
  },[data])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: StatusBar.currentHeight, backgroundColor:"#00296b"}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: "#ffd500"}}>
        {data.data.name}
      </Text>
      <Button title={"Open Drawer"} onPress={() => console.log("s")} />
    </View>
  )
}

export default Home
