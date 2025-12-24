import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {scale,verticalScale,moderateScale} from 'react-native-size-matters'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { color } from '@/constants/colors';
import { useRouter } from 'expo-router';

const QuickCards = ({title,names,colors,links}:{title:string,names:any,colors:string,links:any}) => {

    const router = useRouter()
  return (
    <Pressable style={styles.mainCard} onPress={()=>router.push(links)}>
        <MaterialIcons name={names} size={28} color={colors} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

export default QuickCards

const styles= StyleSheet.create({
    mainCard:{
        width:scale(130),
        backgroundColor:"#ffffff",
        height:verticalScale(44),
        borderRadius:12,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:3,
        boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1)'
    },
    title:{
        fontFamily: 'RubikSemiBold',
        fontSize:14,
        color:color.textColour
    }
})