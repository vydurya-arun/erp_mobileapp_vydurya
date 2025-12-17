import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Tasks = () => {
    const{id} = useLocalSearchParams();
  return (
    <View>
      <Text>Tasks/{id}</Text>
    </View>
  )
}

export default Tasks