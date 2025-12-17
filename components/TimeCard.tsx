import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {scale,verticalScale,moderateScale} from 'react-native-size-matters'
import { color } from '@/constants/colors'



const TimeCard = () => {
    const [checkedIn, setCheckedIn] = useState(false)
    
  return (
    <View style={styles.card}>
      <Text style={styles.dateText}>Tuesday, Oct 26, 2025</Text>
      <Text style={styles.timeText}>09:15 AM</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttomText}>Check In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TimeCard

const styles = StyleSheet.create({
    card:{
        maxWidth:scale(360),
        width:'100%',
        height:verticalScale(120),
        backgroundColor:'#ffffff',
        borderRadius:12,
        padding:10,
        boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1)'
    },
    dateText:{
        fontWeight:'semibold',
        fontSize:16,
        color:"#6C7278"
    },
    timeText:{
        fontFamily: 'Rubik-SemiBold',
        fontSize:44,
        lineHeight:50,
        color: color.textColour,
    },
    button:{
      backgroundColor:color.primary,
      width:150,
      borderRadius:24,
      height:40,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      
    },
    buttomText:{
      fontFamily: 'Rubik-SemiBold',
      color:"#ffffff"
    }
})