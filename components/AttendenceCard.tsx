import { cardTypes } from '@/app/(protected)/(tabs)/attendence';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

type cardDataTypes={
    cardData : cardTypes[]
}

const AttendenceCard = ({cardData}:cardDataTypes) => {
  return (
      <View style={styles.cardContain}>
        {cardData.map((item:cardTypes,index:number)=>(
          <View key={index} style={[styles.cardDiv,{backgroundColor:item.outLine, borderColor:item.colorCard}]}>
            <Text  style={{fontFamily:'rubikMedium', fontSize:moderateScale(12), color:item.colorCard}}>{item.title}</Text>
            <View style={styles.iconDiv}>
              <Text style={{fontFamily:'rubikMedium', fontSize:moderateScale(26),color:item.colorCard}}>{item.count}</Text>
              <MaterialCommunityIcons name={item.icon} size={44} color={item.colorCard} />
            </View>

          </View>
        ))}
        
      </View>
  )
}

export default AttendenceCard

const styles = StyleSheet.create({
     iconDiv:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      },
      cardDiv:{
    
        borderRadius:moderateScale(12),
        width:'50%',
        paddingVertical:verticalScale(10),
        paddingHorizontal:scale(14),
        borderWidth:1,
    
      },
      cardContain:{
        display:'flex',
        flexDirection:'row',
        gap:moderateScale(7)
      }
})