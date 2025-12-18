import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {scale,verticalScale,moderateScale} from 'react-native-size-matters'
import { color } from '@/constants/colors'



const CardsProfile = ({count,title,textColor}:{count:string,title:string,textColor:string}) => {
  return (
    <View style={styles.card}>
      <Text style={[styles.value,{color:textColor}]}>{count}</Text>
      <Text style={styles.label} >{title}</Text>
    </View>
  )
}

export default CardsProfile

const styles = StyleSheet.create({
  card: {
    height: verticalScale(80),
    maxWidth:scale(102),
    width:'100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap:3,
    backgroundColor:'#ffffff',
    boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1)'
  },

  label: {
    fontSize: moderateScale(9),
    color: color.textColour,
    fontFamily: 'RubikSemiBold',
    textTransform:'uppercase'
  },
  value: {
    fontSize: moderateScale(24),
    fontFamily: 'RubikSemiBold',
    
  },
})
