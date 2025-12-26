import { Pressable, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { color } from '@/constants/colors'
import BadgeV2 from '@/components/BadgeV2'
import LeaveCard from '@/components/LeaveCard'
import DatePickerInput from '@/components/DatePicker'



export type FilerTagsProps = {
  id: number,
  status: string,
  tagcolor: string,
  outline: string
}

const FilerTags: FilerTagsProps[] = [
  { id: 1, status: 'All', tagcolor: color.primary, outline: color.primarylight },
  { id: 2, status: 'Accept', tagcolor: color.primaryGreen, outline: color.primaryGreenLight },
  { id: 3, status: 'Progress', tagcolor: color.primaryOrange, outline: color.primaryOrangeLight },
  { id: 4, status: 'Reject', tagcolor: color.primaryRed, outline: color.primaryRedLight },
  
]

const LeaveCards =[
  {id:1, mainTitle: 'Casual Leave', subTitle:'Applied on Dec 12, 2025', mainColor:color.primaryOrange,outColor:color.primaryOrangeLight, date:'Dec 20- Dec 25', duration :'3 Days',status:'Progress'},
  {id:2, mainTitle: 'Sick Leave', subTitle:'Applied on Dec 12, 2025', mainColor:color.primaryRed,outColor:color.primaryRedLight, date:'Dec 20- Dec 25', duration :'1 Days',status:'Reject'},
  {id:3, mainTitle: 'Duty Leave', subTitle:'Applied on Dec 12, 2025', mainColor:color.primaryGreen,outColor:color.primaryGreenLight, date:'Dec 20- Dec 25', duration :'2 Days',status:'Accept'},
  {id:4, mainTitle: 'Casual Leave', subTitle:'Applied on Dec 12, 2025', mainColor:color.primaryGreen,outColor:color.primaryGreenLight, date:'Dec 20- Dec 25', duration :'5 Days',status:'Accept'},
  {id:5, mainTitle: 'Casual Leave', subTitle:'Applied on Dec 12, 2025', mainColor:color.primaryGreen,outColor:color.primaryGreenLight, date:'Dec 20- Dec 25', duration :'5 Days',status:'Accept'},
  {id:6, mainTitle: 'Casual Leave', subTitle:'Applied on Dec 12, 2025', mainColor:color.primaryGreen,outColor:color.primaryGreenLight, date:'Dec 20- Dec 25', duration :'5 Days',status:'Accept'},
]

const historylist = () => {
  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height

  const router = useRouter()
  return (
    <>
      <Stack.Screen options={{ title: 'Leave History', headerTitleStyle: { fontFamily: 'rubikMedium' } }} />

      <ScrollView style={{ maxWidth: windowWidth, maxHeight: windowHeight, width: 'auto', height: '100%' ,marginBottom:moderateScale(70),}} contentContainerStyle={{alignItems:'center'}}>
        <View style={styles.mainFilter}>
          <DatePickerInput label='Select start date'/>
          <DatePickerInput label='Select end date'/>
        </View>

        <View style={styles.filerTags}>
          {FilerTags.map((item: FilerTagsProps, index: number) => (
            <BadgeV2 widths={70} key={index} title={item.status} textColor={item.tagcolor} outColor={item.outline} />
          ))}

        </View>
        <LeaveCard cardData={LeaveCards}/>


      </ScrollView>

      <Pressable style={styles.ApplyBtn} onPress={()=> router.push('/leave/leaveapply')}>
        <Text style={{fontFamily:'rubikMedium', fontSize:moderateScale(17),color:'#ffffff'}}>Apply Leave</Text>
      </Pressable>

    </>
  )
}

export default historylist

const styles = StyleSheet.create({
  Input: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(8)
  },
  mainFilter: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    marginHorizontal: scale(10),
    borderRadius: moderateScale(12),
    display: 'flex',
    flexDirection: 'row',
    gap: moderateScale(10),
  },
  filerTags: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    gap: 6,
    marginHorizontal:moderateScale(20),
  },
  ApplyBtn:{
    position: 'absolute',
    bottom: verticalScale(16),
    alignSelf: 'center',
    backgroundColor: color.buttonColor,
    height:verticalScale(36),
    width: '90%',
    borderRadius: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  }

})