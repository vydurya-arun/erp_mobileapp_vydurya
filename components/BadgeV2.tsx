import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'

const BadgeV2 = ({title,textColor,outColor, widths}:{title:string,textColor:string,outColor:string,widths:number}) => {
  return (
        <View style={[styles.badge,{backgroundColor:outColor, width:scale(widths)}]}>
            <Text style={[styles.badgeTitle,{color:textColor,}]}>{title}</Text>
        </View>
  )
}

export default BadgeV2

const styles= StyleSheet.create({
    badge:{
    height:25,
    display:"flex",
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center",
    borderRadius:12,
    paddingHorizontal:5,

  },
  badgeTitle:{
    fontFamily: 'rubikMedium',
    fontSize:12,
    paddingTop:2
  },
})