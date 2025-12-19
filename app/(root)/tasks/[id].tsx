import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const TasksDetails = () => {
    const{id} = useLocalSearchParams();
  return (
    <>
    <Stack.Screen options={{title:'Task Details'}} />
        <View>
      <Text>TasksDetails/{id}</Text>
    </View>
    </>

  )
}

export default TasksDetails