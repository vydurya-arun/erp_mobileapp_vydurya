import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { color } from '@/constants/colors';
import AttendenceCard from '@/components/AttendenceCard';
import {Calendar,LocaleConfig} from 'react-native-calendars';
import AttendenceEvent from '@/components/AttendenceEvent';
import { Link } from 'expo-router';

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
    const [selected, setSelected] = useState('');

  return (
    <SafeAreaView style={{ width: windowWidth, height: windowHeight }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
      <Header title='Attendence & Leaves'/>
      <View style={styles.cardMain}>
       <AttendenceCard cardData={attendCard}/>
       <AttendenceCard cardData={attendCard2}/>
      </View>
      <View style={styles.calendarContain}>
        <Calendar
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {selected: true, disableTouchEvent: true,selectedColor:color.primary}
          }}
          style={styles.calendarStyle}
        />
      </View>
      <View>
        <View style={styles.recentTitle}>
          <Text style={styles.sectionTitle}>
            Recent Tasks
          </Text>
          <Link style={{ color: color.primary }} href="/tasks/taskList">View More</Link>
        </View>
        <AttendenceEvent/>

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
    marginVertical:verticalScale(15)
  },
    sectionTitle: {
    fontSize: moderateScale(18),
    fontFamily: "rubikMedium",
    marginTop:moderateScale(5),
    color:color.textColour
  },
    sectionTitle2: {
    fontSize: moderateScale(18),
    fontFamily: "rubikMedium",
    color:color.textColour,
    marginBottom:8
  },
  calendarStyle:{
    borderRadius:moderateScale(12),
  },
  calendarContain:{
    paddingHorizontal:scale(10),
    paddingVertical:verticalScale(10)
  },
    recentTitle: {
    display: 'flex',
    flexDirection: 'row',
    width: scale(310),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 18
  },
})