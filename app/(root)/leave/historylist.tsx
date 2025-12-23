import { ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { color } from '@/constants/colors'
import BadgeV2 from '@/components/BadgeV2'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'


export type FilerTagsProps = {
  id: number,
  status: string,
  tagcolor: string,
  outline: string
}

const FilerTags: FilerTagsProps[] = [
  { id: 1, status: 'complete', tagcolor: color.primaryGreen, outline: color.primaryGreenLight },
  { id: 2, status: 'Pending', tagcolor: color.primary, outline: color.primarylight },
  { id: 3, status: 'Overdue', tagcolor: color.primaryRed, outline: color.primaryRedLight },
  { id: 4, status: 'All', tagcolor: color.primaryViolet, outline: color.primaryVioletLight },
]

const historylist = () => {
  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height
  return (
    <>
      <Stack.Screen options={{ title: 'Leave History', headerTitleStyle: { fontFamily: 'rubikMedium' } }} />

      <ScrollView style={{ maxWidth: windowWidth, maxHeight: windowHeight, width: 'auto', height: '100%' }}>
        <View style={styles.mainFilter}>
          <TextInput placeholder='From' style={styles.Input} />
          <TextInput placeholder='To' style={styles.Input} />
        </View>

        <View style={styles.filerTags}>
          {FilerTags.map((item: FilerTagsProps, index: number) => (
            <BadgeV2 widths={70} key={index} title={item.status} textColor={item.tagcolor} outColor={item.outline} />
          ))}

        </View>
        <View style={styles.leaveCard}>
          <View style={{ backgroundColor: color.primaryRed, width: '2%', borderTopLeftRadius: 12, borderBottomLeftRadius: 12, }}></View>
          <View style={{ backgroundColor: 'white', width: '98%', borderTopRightRadius: 12, borderBottomRightRadius: 12, padding: 12, display:'flex',justifyContent:'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <Text style={{ fontFamily: 'rubikMedium', fontSize: 24, lineHeight: 27  }}>Casual Leave</Text>
                <Text style={{ fontFamily: 'rubikRegular', fontSize: 14, lineHeight: 15 }}>Applied On Dec 12, 2025</Text>
              </View>

              <BadgeV2 widths={70} title='Progress' textColor={color.primary} outColor={color.primarylight} />
            </View>
            <View style={{display:'flex', flexDirection:'row',gap:39 }}>
              <View  style={{width:100, }}>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                  <MaterialCommunityIcons name='calendar' size={20} />
                  <Text>Date</Text>
                </View>
                <Text>Dec 20 - Dec 22</Text>
              </View>
              <View  style={{width:100,}}>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                  <MaterialCommunityIcons name='clock' size={20} />
                  <Text>Duration</Text>
                </View>
                <Text>3 Days</Text>
              </View>

            </View>


          </View>
        </View>
        <View style={styles.leaveCard}>
          <View style={{ backgroundColor: color.primaryRed, width: '2%', borderTopLeftRadius: 12, borderBottomLeftRadius: 12, }}></View>
          <View style={{ backgroundColor: 'white', width: '98%', borderTopRightRadius: 12, borderBottomRightRadius: 12, padding: 12, display:'flex',justifyContent:'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <Text style={{ fontFamily: 'rubikMedium', fontSize: 24, lineHeight: 27  }}>Casual Leave</Text>
                <Text style={{ fontFamily: 'rubikRegular', fontSize: 14, lineHeight: 15 }}>Applied On Dec 12, 2025</Text>
              </View>

              <BadgeV2 widths={70} title='Progress' textColor={color.primary} outColor={color.primarylight} />
            </View>
            <View style={{display:'flex', flexDirection:'row',gap:39 }}>
              <View  style={{width:100, }}>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                  <MaterialCommunityIcons name='calendar' size={20} />
                  <Text>Date</Text>
                </View>
                <Text>Dec 20 - Dec 22</Text>
              </View>
              <View  style={{width:100,}}>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                  <MaterialCommunityIcons name='clock' size={20} />
                  <Text>Duration</Text>
                </View>
                <Text>3 Days</Text>
              </View>

            </View>


          </View>
        </View>
        <View style={styles.leaveCard}>
          <View style={{ backgroundColor: color.primaryRed, width: '2%', borderTopLeftRadius: 12, borderBottomLeftRadius: 12, }}></View>
          <View style={{ backgroundColor: 'white', width: '98%', borderTopRightRadius: 12, borderBottomRightRadius: 12, padding: 12, display:'flex',justifyContent:'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <Text style={{ fontFamily: 'rubikMedium', fontSize: 24, lineHeight: 27  }}>Casual Leave</Text>
                <Text style={{ fontFamily: 'rubikRegular', fontSize: 14, lineHeight: 15 }}>Applied On Dec 12, 2025</Text>
              </View>

              <BadgeV2 widths={70} title='Progress' textColor={color.primary} outColor={color.primarylight} />
            </View>
            <View style={{display:'flex', flexDirection:'row',gap:39 }}>
              <View  style={{width:100, }}>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                  <MaterialCommunityIcons name='calendar' size={20} />
                  <Text>Date</Text>
                </View>
                <Text>Dec 20 - Dec 22</Text>
              </View>
              <View  style={{width:100,}}>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                  <MaterialCommunityIcons name='clock' size={20} />
                  <Text>Duration</Text>
                </View>
                <Text>3 Days</Text>
              </View>

            </View>


          </View>
        </View>
        <View style={styles.leaveCard}>
          <View style={{ backgroundColor: color.primaryRed, width: '2%', borderTopLeftRadius: 12, borderBottomLeftRadius: 12, }}></View>
          <View style={{ backgroundColor: 'white', width: '98%', borderTopRightRadius: 12, borderBottomRightRadius: 12, padding: 12, display:'flex',justifyContent:'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <Text style={{ fontFamily: 'rubikMedium', fontSize: 24, lineHeight: 27  }}>Casual Leave</Text>
                <Text style={{ fontFamily: 'rubikRegular', fontSize: 14, lineHeight: 15 }}>Applied On Dec 12, 2025</Text>
              </View>

              <BadgeV2 widths={70} title='Progress' textColor={color.primary} outColor={color.primarylight} />
            </View>
            <View style={{display:'flex', flexDirection:'row',gap:39 }}>
              <View  style={{width:100, }}>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                  <MaterialCommunityIcons name='calendar' size={20} />
                  <Text>Date</Text>
                </View>
                <Text>Dec 20 - Dec 22</Text>
              </View>
              <View  style={{width:100,}}>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                  <MaterialCommunityIcons name='clock' size={20} />
                  <Text>Duration</Text>
                </View>
                <Text>3 Days</Text>
              </View>

            </View>


          </View>
        </View>

      </ScrollView>

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
    gap: moderateScale(10)
  },
  filerTags: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    gap: 6,
    marginHorizontal: scale(10),
  },
  leaveCard: {
    backgroundColor: 'white',
    height: verticalScale(110),
    marginHorizontal: scale(10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: moderateScale(12),
    marginBottom:10
  }
})