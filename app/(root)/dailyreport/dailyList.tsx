import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const dailyList = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'My Daily Updates' }} />
      <View style={styles.mainScreen}>
          <View style={{ flex: 1,backgroundColor:'yellow' }} />
           <View style={{ flex: 1,backgroundColor:'blue' }} />

      </View>
    </>
  )
}

export default dailyList

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: "red",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 2,
    backgroundColor:'blue',
    flexGrow:1
  },
})