import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { scale, verticalScale } from 'react-native-size-matters';

const TasksDetails = () => {
    const{id} = useLocalSearchParams();
    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height

  return (
    <>
    <Stack.Screen options={{title:'Task Details'}} />
    <View>

      <View style={{width:windowWidth, height:windowHeight , backgroundColor:'green',}}>
        <View style={{width:scale(100), height:scale(100) , backgroundColor:'red'}}></View>
      </View> 

    </View>
    </>

  )
}

export default TasksDetails