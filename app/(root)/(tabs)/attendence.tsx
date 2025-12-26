import ActionButton from '@/components/ActionButton';
import AttendenceCard from '@/components/AttendenceCard';
import EventCard, { EventItem } from '@/components/EventCard';
import Header from '@/components/Header';
import MyIcons from '@/components/MyIcons';
import { color } from '@/constants/colors';
import { icons } from '@/constants/logo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const dummyEvents: EventItem[] = [
  { id: '1', title: 'New Year', date: '2025-01-01', type: 'Holiday', description: 'Public Holiday' },
  { id: '2', title: 'Team Sync', date: '2025-01-10', type: 'Meeting', description: 'Weekly team sync up' },
];

export type cardTypes = {
  id: number,
  title: string,
  count: string,
  icon: any,
  colorCard: string,
  outLine: string
}

const attendCard: cardTypes[] = [
  { id: 1, title: 'Present', count: '5', icon: 'check-circle', colorCard: color.primaryGreen, outLine: color.primaryGreenLight },
  { id: 2, title: 'Absent', count: '2', icon: 'close-circle', colorCard: color.primaryRed, outLine: color.primaryRedLight },
]
const attendCard2: cardTypes[] = [
  { id: 1, title: 'Ongoing', count: '3', icon: 'clock', colorCard: color.primaryOrange, outLine: color.primaryOrangeLight },
  { id: 2, title: 'Total Days', count: '20', icon: 'calendar-month', colorCard: color.primary, outLine: color.primarylight },
]


const Attendence = () => {

  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height
  const [selected, setSelected] = useState('');
  const router = useRouter();

  return (
    <SafeAreaView style={{ width: windowWidth, height: windowHeight }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header title='Attendence & Leaves' />
        <View style={styles.cardMain}>
          <AttendenceCard cardData={attendCard} />
          <AttendenceCard cardData={attendCard2} />
        </View>
        <View style={styles.calendarContain}>
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: { selected: true, disableTouchEvent: true, selectedColor: color.primary }
            }}
            style={styles.calendarStyle}
          />
        </View>
        <View style={styles.recentTitle}>
          <Text style={styles.sectionTitle}>
            Manage Leaves
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: verticalScale(70), paddingHorizontal: 12 }} contentContainerStyle={{ alignItems: 'center', gap: 25 }}>

          <ActionButton
            label="Leave History"
            icon={(size: number, color: string) => (
              <MyIcons icon={icons.history} size={size} color={color} />
            )}
            iconColor={color.primary}
            onPress={() => router.push("/leave/historylist")}
          />

          <ActionButton
            label="Daily Activity"
            icon={(size: number, color: string) => (
              <MaterialCommunityIcons name="file-document" size={size} color={color} />
            )}
            iconColor={color.primaryOrange}
            onPress={() => router.push("/leave/dailyactivity")}
          />
          <ActionButton
            label="Events"
            icon={(size: number, color: string) => (
              <MaterialIcons name="event-available" size={size} color={color} />
            )}
            iconColor={color.primaryGreen}
            onPress={() => router.push("/leave/eventlist")}
          />


        </ScrollView>

        <View style={{ marginBottom: 10 }}>
          <View style={styles.recentTitle}>
            <Text style={styles.sectionTitle}>
              Recent Events
            </Text>
            <Link style={{ color: color.primary }} href="/leave/eventlist">View More</Link>
          </View>
          {/* Displaying first two events as a preview */}
          {dummyEvents.slice(0, 2).map(item => (
            <EventCard key={item.id} event={item} />
          ))}
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
    width: 'auto'
  },
  cardMain: {
    display: 'flex',
    gap: moderateScale(6),
    marginVertical: verticalScale(15)
  },
  sectionTitle: {
    fontSize: moderateScale(18),
    fontFamily: "rubikMedium",
    color: color.textColour
  },
  sectionTitle2: {
    fontSize: moderateScale(18),
    fontFamily: "rubikMedium",
    color: color.textColour,
    marginBottom: 8
  },
  calendarStyle: {
    borderRadius: moderateScale(12),
  },
  calendarContain: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10)
  },
  recentTitle: {
    display: 'flex',
    flexDirection: 'row',
    width: scale(310),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 5
  },
  mainLiks: {
    width: scale(50),
    height: scale(50),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 7,
    backgroundColor: 'white',
    borderRadius: 60,
    position: 'relative'
  }
})