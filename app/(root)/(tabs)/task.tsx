
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import Header from '@/components/Header'

const Task = () => {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
      <Header title='Task'/>
      <Text>tasks</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Task

const styles = StyleSheet.create({
    scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
})