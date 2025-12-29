import BadgeV2 from '@/components/BadgeV2'
import DatePickerInput from '@/components/DatePicker'
import LeaveCard from '@/components/LeaveCard'
import { color } from '@/constants/colors'
import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native'



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

const LeaveCards = [
  { id: 1, mainTitle: 'Casual Leave', subTitle: 'Applied on Dec 10, 2025', mainColor: color.primaryOrange, outColor: color.primaryOrangeLight, date: 'Dec 20- Dec 25', duration: '3 Days', status: 'Progress', rawDate: new Date('2025-12-10') },
  { id: 2, mainTitle: 'Sick Leave', subTitle: 'Applied on Dec 12, 2025', mainColor: color.primaryRed, outColor: color.primaryRedLight, date: 'Dec 20- Dec 25', duration: '1 Days', status: 'Reject', rawDate: new Date('2025-12-12') },
  { id: 3, mainTitle: 'Duty Leave', subTitle: 'Applied on Dec 15, 2025', mainColor: color.primaryGreen, outColor: color.primaryGreenLight, date: 'Dec 20- Dec 25', duration: '2 Days', status: 'Accept', rawDate: new Date('2025-12-15') },
  { id: 4, mainTitle: 'Casual Leave', subTitle: 'Applied on Dec 18, 2025', mainColor: color.primaryGreen, outColor: color.primaryGreenLight, date: 'Dec 20- Dec 25', duration: '5 Days', status: 'Accept', rawDate: new Date('2025-12-18') },
  { id: 5, mainTitle: 'Casual Leave', subTitle: 'Applied on Dec 20, 2025', mainColor: color.primaryGreen, outColor: color.primaryGreenLight, date: 'Dec 20- Dec 25', duration: '5 Days', status: 'Accept', rawDate: new Date('2025-12-20') },
  { id: 6, mainTitle: 'Casual Leave', subTitle: 'Applied on Dec 22, 2025', mainColor: color.primaryGreen, outColor: color.primaryGreenLight, date: 'Dec 20- Dec 25', duration: '5 Days', status: 'Accept', rawDate: new Date('2025-12-22') },
]

const historylist = () => {
  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const router = useRouter()

  const filteredCards = LeaveCards.filter(card => {
    // Clone date to avoid modifying original data during normalization
    const cardDate = new Date(card.rawDate);
    // Normalize card date to midnight
    cardDate.setHours(0, 0, 0, 0);

    // Status Filter
    const statusMatch = activeFilter === 'All' || card.status === activeFilter;

    // Date Range Filter
    let dateMatch = true;
    if (startDate) {
      // Normalize start date to midnight
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
      dateMatch = dateMatch && cardDate.getTime() >= start.getTime();
    }
    if (endDate) {
      // Normalize end date to midnight for comparison (checking if card date is <= end date)
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      dateMatch = dateMatch && cardDate.getTime() <= end.getTime();
    }

    return statusMatch && dateMatch;
  });

  const handleReset = () => {
    setActiveFilter('All');
    setStartDate(null);
    setEndDate(null);
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Leave History', headerTitleStyle: { fontFamily: 'rubikMedium' } }} />

      <ScrollView style={{ maxWidth: windowWidth, maxHeight: windowHeight, width: 'auto', height: '100%', marginBottom: moderateScale(70), }} contentContainerStyle={{ alignItems: 'center' }}>
        <View style={styles.mainFilter}>
          <DatePickerInput label='Select start date' value={startDate} onDateChange={setStartDate} />
          <DatePickerInput label='Select end date' value={endDate} onDateChange={setEndDate} />
        </View>

        <View style={styles.filerTags}>

          {FilerTags.map((item: FilerTagsProps, index: number) => (
              <TouchableOpacity key={index} onPress={() => setActiveFilter(item.status)}>
                  <View style={{ opacity: activeFilter === item.status ? 1 : 0.5 }}>
                      <BadgeV2
                          title={item.status}
                          textColor={activeFilter === item.status ? item.tagcolor : color.textColourLight}
                          outColor={activeFilter === item.status ? item.outline : '#F3F4F6'}
                          widths={scale(60)}
                      />
                  </View>
              </TouchableOpacity>
          ))}

          {/* Reset Button */}
          {(activeFilter !== 'All' || startDate || endDate) && (
            <Pressable onPress={handleReset} style={styles.resetBtn}>
              <MaterialIcons name="refresh" size={24} color={color.textColour} />
            </Pressable>
          )}

        </View>
        <LeaveCard cardData={filteredCards} />
        {filteredCards.length === 0 && (
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: 'rubikRegular', color: color.textColourLight }}>No records found</Text>
          </View>
        )}

      </ScrollView>

      <Pressable style={styles.ApplyBtn} onPress={() => router.push('/leave/leaveapply')}>
        <Text style={{ fontFamily: 'rubikMedium', fontSize: moderateScale(17), color: '#ffffff' }}>Apply Leave</Text>
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
    marginHorizontal: moderateScale(20),
    alignItems: 'center', // Align items vertically in the row
  },
  resetBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    backgroundColor: '#F3F4F6', // Light gray background
    padding: 4,
    borderRadius: 20, // Circular shape effect
  },
  ApplyBtn: {
    position: 'absolute',
    bottom: verticalScale(16),
    alignSelf: 'center',
    backgroundColor: color.buttonColor,
    height: verticalScale(36),
    width: '90%',
    borderRadius: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  }

})