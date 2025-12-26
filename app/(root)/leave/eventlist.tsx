import DatePickerInput from '@/components/DatePicker';
import { color } from '@/constants/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Stack } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import EventCard, { EventItem } from '@/components/EventCard';

const dummyEvents: EventItem[] = [
  { id: '1', title: 'New Year', date: '2025-01-01', type: 'Holiday', description: 'Public Holiday' },
  { id: '2', title: 'Team Sync', date: '2025-01-10', type: 'Meeting', description: 'Weekly team sync up' },
  { id: '3', title: 'Project Deadline', date: '2025-01-15', type: 'Work', description: 'Submit final report' },
  { id: '4', title: 'Republic Day', date: '2025-01-26', type: 'Holiday', description: 'Public Holiday' },
  { id: '5', title: 'Client Call', date: '2025-01-20', type: 'Meeting', description: 'Discuss requirements' },
  { id: '6', title: 'Code Review', date: '2025-12-12', type: 'Work', description: 'Review Pull Requests' }, // Matching recent context
  { id: '7', title: 'Christmas', date: '2025-12-25', type: 'Holiday', description: 'Public Holiday' },
];

const eventlist = () => {

  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const [startDate, setStartDate] = useState<Date | null>(startOfMonth);
  const [endDate, setEndDate] = useState<Date | null>(endOfMonth);

  // Filter Logic
  const filteredEvents = useMemo(() => {
    return dummyEvents.filter(event => {
      const eventDate = new Date(event.date);
      // Normalize time
      eventDate.setHours(0, 0, 0, 0);

      let match = true;
      if (startDate) {
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        match = match && eventDate >= start;
      }
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        match = match && eventDate <= end;
      }
      return match;
    }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [startDate, endDate]);

  // Marked Dates for Calendar
  const markedDates = useMemo(() => {
    const marks: any = {};

    // Mark all events
    dummyEvents.forEach(evt => {
      marks[evt.date] = { marked: true, dotColor: color.primary };
    });

    // Highlight selected range (optional, complex to do fully, so just marking events)
    return marks;
  }, []);

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Events', headerTitleStyle: { fontFamily: 'rubikMedium' } }} />
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>

        {/* Filters */}
        <View style={styles.filterSection}>
          <View style={styles.dateRow}>
            <DatePickerInput label='Start Date' value={startDate} onDateChange={setStartDate} />
            <DatePickerInput label='End Date' value={endDate} onDateChange={setEndDate} />
          </View>
          {(startDate || endDate) && (
            <TouchableOpacity onPress={handleReset} style={styles.resetBtn}>
              <MaterialIcons name="refresh" size={20} color={color.textColour} />
              <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Event List */}
        <View style={styles.listContainer}>
          <Text style={styles.sectionTitle}>Events ({filteredEvents.length})</Text>
          {filteredEvents.map(item => (
            <EventCard key={item.id} event={item} />
          ))}
          {filteredEvents.length === 0 && (
            <Text style={styles.emptyText}>No events found in this range.</Text>
          )}
        </View>

      </ScrollView>
    </>
  )
}

export default eventlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  filterSection: {
    padding: moderateScale(16),
    backgroundColor: 'white',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dateRow: {
    flexDirection: 'row',
    gap: 12,
  },
  resetBtn: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    alignSelf: 'flex-end'
  },
  resetText: {
    fontFamily: 'rubikRegular',
    fontSize: 12,
    color: color.textColour,
  },
  calendarContainer: {
    marginHorizontal: moderateScale(16),
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 2
  },
  listContainer: {
    paddingHorizontal: moderateScale(16),
  },
  sectionTitle: {
    fontFamily: 'RubikSemiBold',
    fontSize: 18,
    marginBottom: 12,
    color: '#1F2937'
  },
  emptyText: {
    textAlign: 'center',
    fontFamily: 'rubikRegular',
    color: color.textColourLight,
    marginTop: 20,
  }
})