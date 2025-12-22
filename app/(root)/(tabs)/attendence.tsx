import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { color } from '@/constants/colors';
import AttendenceCard from '@/components/AttendenceCard';

  export type cardTypes = {
    id:number,
    title:string,
    count:string,
    icon:any,
    colorCard:string,
    outLine:string
  }

  const attendCard :cardTypes[] = [
    {id:1, title:'Present',count:'5',icon:'check-circle',colorCard:color.primaryGreen,outLine:color.primaryGreenLight},
    {id:2, title:'Absent',count:'2',icon:'close-circle',colorCard:color.primaryRed,outLine:color.primaryRedLight},
  ]
  const attendCard2 :cardTypes[] = [
    {id:1, title:'Ongoing',count:'3',icon:'clock',colorCard:color.primaryOrange,outLine:color.primaryOrangeLight},
    {id:2, title:'Total Days',count:'20',icon:'calendar-month',colorCard:color.primary,outLine:color.primarylight},
  ]


const Attendence = () => {

    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height

  return (
    <SafeAreaView style={{ width: windowWidth, height: windowHeight }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
      <Header title='Attendence & Leaves'/>
      <Text style={styles.sectionTitle}>MONTHLY SUMMARY</Text>
      <View style={styles.cardMain}>
       <AttendenceCard cardData={attendCard}/>
       <AttendenceCard cardData={attendCard2}/>
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Attendence

const styles = StyleSheet.create({
    scrollContent: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: 12,
    width:'auto'
  },
  cardMain:{
    display:'flex',
    gap:moderateScale(6),
    marginVertical:verticalScale(5)
  },
    sectionTitle: {
    fontSize: moderateScale(15),
    fontFamily: "rubikMedium",
    marginTop:moderateScale(5),
    color:color.textColour
  },
})