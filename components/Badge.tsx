import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Octicons from '@expo/vector-icons/Octicons';

const Badge = ({title}:{title:string}) => {
  return (
        <View style={styles.badge}>
            <Octicons name="dot-fill" size={20} color="#1FC155" />
            <Text style={styles.badgeTitle}>{title}</Text>
        </View>
  )
}

export default Badge

const styles= StyleSheet.create({
    badge:{
    height:25,
    backgroundColor:"#D2F3DD",
    display:"flex",
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center",
    borderRadius:12,
    paddingHorizontal:5
  },
  badgeTitle:{
    fontFamily: 'rubikMedium',
    color:"#1FC155",
    fontSize:12,
    paddingTop:2
  },
})