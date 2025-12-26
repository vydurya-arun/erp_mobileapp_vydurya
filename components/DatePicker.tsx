import { color } from '@/constants/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const DatePickerInput = ({ label, value, onDateChange }: { label: string, value?: Date | null, onDateChange?: (date: Date) => void }) => {
  const [show, setShow] = useState(false)

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(false)
    if (event.type === 'set' && selectedDate) {
      if (onDateChange) {
        onDateChange(selectedDate)
      }
    }
  }

  return (
    <>
      {/* INPUT TRIGGER */}
      <Pressable onPress={() => setShow(true)} style={{ flex: 1 }}>
        <Text style={{ fontFamily: 'rubikMedium', color: color.textColour }}>{label}</Text>
        <TextInput
          placeholder="DD/MM/YYYY"
          style={styles.Input}
          value={value ? value.toLocaleDateString() : ''}
          editable={false}
          pointerEvents="none"
        />
        <MaterialCommunityIcons name='calendar' size={24} color={color.primary} style={styles.icon} />
      </Pressable>

      {/* DATE PICKER */}
      {show && (
        <DateTimePicker
          testID="datePicker"
          value={value ?? new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={onChange}
        />
      )}
    </>
  )
}

export default DatePickerInput

const styles = StyleSheet.create({
  Input: {
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(32),
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    position: 'relative',
    fontFamily: 'rubikRegular',
    fontSize: moderateScale(12),
    color: color.textColour
  },
  icon: {
    position: 'absolute',
    top: moderateScale(31),
    left: 5
  },

})
