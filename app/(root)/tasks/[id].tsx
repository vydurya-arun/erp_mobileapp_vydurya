import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const TasksDetails = () => {
    const{id} = useLocalSearchParams();
  return (
    <View>
      <Text>TasksDetails/{id}</Text>
    </View>
  )
}

export default TasksDetails