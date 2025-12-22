
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '@/constants/colors'

const BadgeAccept = () => {
  return (
        <View style={[styles.badge,{backgroundColor:color.primaryVioletLight,}]}>
            <Text style={[styles.badgeTitle,{color:color.primaryViolet,}]}>Accept</Text>
        </View>
  )
}

export default BadgeAccept

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