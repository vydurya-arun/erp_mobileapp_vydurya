import { Pressable, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { color } from '@/constants/colors'
import DatePickerInput from '@/components/DatePicker'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const leaveapply = () => {

  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height
  const router = useRouter();
  return (

    <>
      <Stack.Screen options={{ title: 'Leaves Apply', headerTitleStyle: { fontFamily: 'rubikMedium' } }} />
      <ScrollView style={{ paddingHorizontal: scale(10), paddingVertical: scale(10), maxHeight: windowHeight, maxWidth: windowWidth }}>
        <View style={styles.mainCard}>
          <View>
            <Text style={styles.label}>Leave Type</Text>
            <TextInput style={styles.input} placeholder='Select a Leave type' />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <DatePickerInput label='Start Date' />
            <DatePickerInput label='End Date' />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <Text style={styles.label}>Total duration :</Text>
            <Text style={{ fontFamily: 'rubikMedium', color: color.primary }}>3 days</Text>
          </View>
          <View>
            <Text style={styles.label}>Reason For Leave</Text>
            <TextInput multiline numberOfLines={4} textAlignVertical='top' style={styles.inputArea} placeholder='Select a Leave type' />

          </View>
          <View>
            <Text style={{ fontFamily: 'rubikMedium', fontSize: moderateScale(14), color: color.textColourLight,marginBottom:10 }}>ATTACHMAENTS</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ width: '100%', }}>
              <View style={styles.imageCard}>
                <View style={styles.imageUpload}>
                  <MaterialIcons name="image" size={38} color={color.primary} />
                </View>
                <View>
                  <Text style={{ fontFamily: 'rubikMedium' }}>ErpScreen.png</Text>
                  <Text>5.3 MB</Text>
                </View>
              </View>
              <View style={styles.imageCard}>
                <View style={styles.imageUpload}>
                  <MaterialIcons name="image" size={38} color={color.primary} />
                </View>
                <View>
                  <Text style={{ fontFamily: 'rubikMedium' }}>ErpScreen.png</Text>
                  <Text>5.3 MB</Text>
                </View>
              </View>
              <View style={styles.imageCard}>
                <View style={styles.imageUpload}>
                  <MaterialIcons name="image" size={38} color={color.primary} />
                </View>
                <View>
                  <Text style={{ fontFamily: 'rubikMedium' }}>ErpScreen.png</Text>
                  <Text>5.3 MB</Text>
                </View>
              </View>
            </ScrollView>

          </View>
          <Pressable style={styles.ApplyBtn} >
            <Text style={{ fontFamily: 'rubikMedium', fontSize: moderateScale(17), color: '#ffffff' }}>Submit</Text>
          </Pressable>


        </View>

      </ScrollView>
    </>

  )
}

export default leaveapply

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
    display: 'flex',
    gap: 20
  },
  label: {
    fontFamily: 'rubikMedium',
    color: color.textColour
  },
  input: {
    borderWidth: 0.5,
    borderColor: color.textColourLight,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(12),
    backgroundColor: '#f2f2f2ff'
  },
  inputArea: {
    borderWidth: 0.5,
    borderColor: color.textColourLight,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(12),
    backgroundColor: '#f2f2f2ff',
    minHeight: moderateScale(100),
  },
  imageCard: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    backgroundColor: '#e3e3e358',
    borderRadius: moderateScale(12),
    width: scale(160),
    padding: moderateScale(8),
    marginHorizontal: scale(10)
  },
  imageUpload: {
    backgroundColor: color.primarylight,
    width: scale(50),
    height: scale(50),
    borderRadius: moderateScale(12),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ApplyBtn: {
    backgroundColor: color.buttonColor,
    height:verticalScale(36),
    width: '100%',
    borderRadius: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  }
})