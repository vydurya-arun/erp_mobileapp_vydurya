import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import MyIcons from '@/components/MyIcons'
import { icons } from '@/constants/logo'
import { color } from '@/constants/colors'

const dailyList = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'My Daily Updates' }} />
      <View style={styles.mainScreen}>
        <MyIcons size={50} color='red'  icon={icons.group}/>
        <MyIcons size={50}  icon={icons.meeting}/>
      </View>
    </>
  )
}

export default dailyList

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 2,
    backgroundColor:'blue',
    flexGrow:1
  },
})