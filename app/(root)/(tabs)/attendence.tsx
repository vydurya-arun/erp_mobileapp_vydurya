import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import Header from '@/components/Header'

const Attendence = () => {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
      <Header title='Attendence'/>
      <Text>Attendence</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Attendence

const styles = StyleSheet.create({
    scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
})