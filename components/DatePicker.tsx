import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Pressable,
} from 'react-native'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { moderateScale } from 'react-native-size-matters'
import { color } from '@/constants/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const DatePickerInput = ({label}:{label:string}) => {
  const [date, setDate] = useState<Date | null>(null)
  const [show, setShow] = useState(false)

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(false)
    if (event.type === 'set' && selectedDate) {
      setDate(selectedDate)
    }
  }

  return (
    <>
      {/* INPUT TRIGGER */}
      <Pressable onPress={() => setShow(true)} style={{flex:1}}>
        <Text style={{fontFamily:'rubikMedium', color:color.textColour}}>{label}</Text>
        <TextInput
          placeholder="DD/MM/YYYY"
          style={styles.Input}
          value={date ? date.toLocaleDateString() : ''}
          editable={false}
          pointerEvents="none"
        />
        <MaterialCommunityIcons name='calendar' size={24} color={color.primary} style={styles.icon}/>
      </Pressable>

      {/* DATE PICKER */}
      {show && (
        <DateTimePicker
          testID="datePicker"
          value={date ?? new Date()}
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
    boxShadow:'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    position:'relative',
    fontFamily:'rubikMedium',
    color:color.textColour
  },
  icon:{
    position:'absolute',
    top:moderateScale(31),
    left:5
  },

})
