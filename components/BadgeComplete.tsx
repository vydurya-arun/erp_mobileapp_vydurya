
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '@/constants/colors'

const BadgeComplete = () => {
  return (
        <View style={[styles.badge,{backgroundColor:color.primaryGreenLight,}]}>
            <Text style={[styles.badgeTitle,{color:color.primaryGreen,}]}>Complete</Text>
        </View>
  )
}

export default BadgeComplete

const styles= StyleSheet.create({
    badge:{
    height:25,
    display:"flex",
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center",
    borderRadius:12,
    paddingHorizontal:5
  },
  badgeTitle:{
    fontFamily: 'rubikMedium',
    fontSize:12,
    paddingTop:2
  },
})