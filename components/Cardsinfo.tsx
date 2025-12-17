import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import {scale,verticalScale,moderateScale} from 'react-native-size-matters'
import { color } from '@/constants/colors'


const Cardsinfo = ({name,count,title,colour,bgColor}:{name:any,count:string,title:string,colour:string,bgColor:string}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.iconWrapper, { backgroundColor: bgColor }]}>
        <MaterialCommunityIcons  name={name} size={32} color={colour} />
      </View>

      <Text style={styles.label} >{title}</Text>
      <Text style={styles.value}>{count}</Text>
    </View>
  )
}

export default Cardsinfo

const styles = StyleSheet.create({
  card: {
    height: verticalScale(110),
    maxWidth:scale(102),
    width:'100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap:3,
    backgroundColor:'#ffffff',
    boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1)'
  },
  iconWrapper: {
    width: scale(46),
    height: verticalScale(43),
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:3
  },
  label: {
    fontSize: moderateScale(9),
    color: '#6C7278',
    fontFamily: 'Rubik-SemiBold',
    textTransform:'uppercase'
  },
  value: {
    fontSize: moderateScale(22),
    fontFamily: 'Rubik-SemiBold',
    color: color.textColour,
  },
})
