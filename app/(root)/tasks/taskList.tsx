import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const taskList = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'My All Tasks' }} />
      <View>
        <Text>taskList</Text>
      </View>
    </>

  )
}

export default taskList

const styles = StyleSheet.create({})