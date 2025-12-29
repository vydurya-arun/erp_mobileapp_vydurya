import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const recentList = () => {
  return (
    <>
     <Stack.Screen options={{ title: 'Recent Activity' }} />
     <View>
        <Text>Recent Lists</Text>
     </View>
    </>

  )
}

export default recentList

const styles = StyleSheet.create({})