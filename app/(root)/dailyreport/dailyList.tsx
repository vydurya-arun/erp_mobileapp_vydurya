import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const dailyList = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'My Daily Updates' }} />
      <View style={styles.mainScreen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Text>Daily Report</Text>
        </ScrollView>

      </View>
    </>
  )
}

export default dailyList

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: "rgba(243,244,246,0.5)",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
})