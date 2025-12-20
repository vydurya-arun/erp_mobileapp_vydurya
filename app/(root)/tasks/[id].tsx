import { View, Text, useWindowDimensions, ScrollView, StyleSheet, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import * as Device from 'expo-device';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BadgeV2 from '@/components/BadgeV2';
import { color } from '@/constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const isTablet = Device.deviceType === Device.DeviceType.TABLET;

const TasksDetails = () => {
  const { id } = useLocalSearchParams();
  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height

  return (
    <>
      <Stack.Screen options={{ title: 'Task Details', headerTitleStyle: { fontFamily: 'rubikMedium' } }} />

      <ScrollView style={{ width: windowWidth, height: windowHeight }}>
        <View style={styles.cardType1}>
          <View style={styles.header}>
            <MaterialCommunityIcons name="folder" size={20} color={color.textColourLight} />
            <Text style={{ fontFamily: 'rubikMedium', color: color.textColourLight, fontSize: 12 }}>INVENTORY/LOGISTICS</Text>
          </View>
          <Text style={{ fontFamily: 'rubikMedium', color: color.textColour, fontSize: 23, paddingHorizontal: moderateScale(15), }}>ERP Software Mobile App</Text>
          <View style={styles.badgeDiv}>
            <BadgeV2 widths={80} title='Progress' textColor={color.primary} outColor={color.primarylight} />
            <BadgeV2 widths={80} title='Priority' textColor={color.primaryRed} outColor={color.primaryRedLight} />
          </View>
        </View>


        {/* basic Details */}
        <View style={styles.cardType2}>
          <View style={styles.div1}>
            <View style={styles.subCardTyp1}>
              <View style={styles.detailsBadge}>
                <MaterialIcons name="calendar-month" size={20} color={color.textColourLight} />
                <Text style={{ color: color.textColourLight,fontSize:14 }}>Date post</Text>
              </View>
              <View>
                <Text style={{ fontFamily: 'rubikMedium', fontSize: moderateScale(16), lineHeight: 16 }}>Oct 29,2025</Text>
              </View>
            </View>
            <View style={styles.subCardTyp1}>
              <View style={styles.detailsBadge}>
                <Ionicons name="person-circle-sharp" size={24} color={color.textColourLight} />

                <Text style={{ color: color.textColourLight,fontSize:14 }}>Assignee</Text>
              </View>
              <View>
                <Text style={{ fontFamily: 'rubikMedium', fontSize: moderateScale(16), lineHeight: 16 }}>ArunKumar</Text>
              </View>
            </View>

          </View>
          <View style={styles.div2}>
            <View style={styles.subCardTyp1}>
              <View style={styles.detailsBadge}>
                <MaterialCommunityIcons name="projector-screen-variant" size={24} color={color.textColourLight} />

                <Text style={{ color: color.textColourLight,fontSize:14 }}>Project</Text>
              </View>
              <View>
                <Text style={{ fontFamily: 'rubikMedium', fontSize: moderateScale(16), lineHeight: 16 }}>ERP Software</Text>
              </View>
            </View>
            <View style={styles.subCardTyp1}>
              <View style={styles.detailsBadge}>
                <MaterialIcons name="groups" size={24} color={color.textColourLight} />
                <Text style={{ color: color.textColourLight,fontSize:14 }}> Team</Text>
              </View>
              <View>
                <Text style={{ fontFamily: 'rubikMedium', fontSize: moderateScale(16), lineHeight: 16 }}>Software</Text>
              </View>
            </View>

          </View>

          {/* description */}
          <View style={styles.descriptionCont}>
            <View style={styles.detailHead}>
              <Text style={{ fontFamily: 'rubikMedium', fontSize: moderateScale(20) }}>Description</Text>
              <MaterialCommunityIcons name="alert-circle-outline" size={24} color="black" />
            </View>
            <ScrollView style={{maxHeight:verticalScale(180),minHeight:scale(80),overflow:'scroll'}}>
              <Text style={{ fontFamily: 'rubikRegular', fontSize: moderateScale(12), color: color.textColourLight, lineHeight: 17 }}>A list of supported processor architecture versions. The device expects the binaries it runs to be compiled for one of these architectures. This value is null if the supported architectures could not be determined, particularly on web</Text>
            </ScrollView>
          </View>

          {/* Attachment */}
          <View style={{ width:'100%'}}>
            <Text style={{ fontFamily: 'rubikMedium', fontSize: moderateScale(14),color:color.textColourLight }}>ATTACHMAENTS</Text>
            <ScrollView
             horizontal 
             showsHorizontalScrollIndicator={false}
             style={{width:'100%',marginVertical:verticalScale(10)}}>
              <View style={styles.imageCard}>
                <View style={styles.imageUpload}>
                  <MaterialIcons name="image" size={48} color={color.primary} />
                </View>
                <View>
                  <Text style={{fontFamily:'rubikMedium'}}>ErpScreen.png</Text>
                  <Text>5.3 MB</Text>
                </View>
              </View>
              <View style={styles.imageCard}>
                <View style={styles.imageUpload}>
                  <MaterialIcons name="image" size={48} color={color.primary} />
                </View>
                <View>
                  <Text style={{fontFamily:'rubikMedium'}}>ErpScreen.png</Text>
                  <Text>5.3 MB</Text>
                </View>
              </View>
              <View style={styles.imageCard}>
                <View style={styles.imageUpload}>
                  <MaterialIcons name="image" size={48} color={color.primary} />
                </View>
                <View>
                  <Text style={{fontFamily:'rubikMedium'}}>ErpScreen.png</Text>
                  <Text>5.3 MB</Text>
                </View>
              </View>
            </ScrollView>
            <TouchableOpacity style={{width:'100%', backgroundColor:'#0c98e3ff',height:verticalScale(36),borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontFamily:'rubikMedium', fontSize:moderateScale(17),color:'#ffffff'}}>
                Complete Task
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:12, marginBottom:22,width:'100%', borderWidth:1,borderColor:'#0c98e3ff' ,height:verticalScale(36),borderRadius:12,display:'flex', flexDirection:'row', gap:3,alignItems:'center',justifyContent:'center'}}>
              <MaterialIcons name="mode-comment" size={24} color="#0c98e3ff" />
              <Text style={{fontFamily:'rubikMedium', fontSize:moderateScale(17),color:'#0c98e3ff'}}>
                Add Comment
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

    </>

  )
}

export default TasksDetails

const styles = StyleSheet.create({
  cardType1: {
    maxWidth: isTablet ? scale(768) : scale(480),
    width: 'auto',
    backgroundColor: 'white',
    height: verticalScale(100),
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(15),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(12),
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  cardType2: {
    maxWidth: isTablet ? scale(768) : scale(480),
    width: 'auto',
    backgroundColor: 'white',
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(10),
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(12),
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

  },
  badgeDiv: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(15),
    gap: 12,
    alignItems: 'center'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: moderateScale(15),
    alignItems: 'center'
  },
  detailsBadge: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  subCardTyp1: {
    width: '50%',
    height: verticalScale(50),
    display: 'flex',
    justifyContent: 'center',
    gap: 4
  },
  div1: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',

  },
  div2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: color.textColourLight,
    paddingBottom: 5
  },
  detailHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(10)
  },
  descriptionCont:{
    marginBottom:verticalScale(10),

  },
  imageUpload:{
    backgroundColor:color.primarylight,
     width:scale(50),
     height:scale(50),
     borderRadius:moderateScale(12),
     display:'flex',
     alignItems:'center',
     justifyContent:'center'
  },
  imageCard:{
    display:'flex',
    flexDirection:'row',
    gap:4,
    alignItems:'center',
    backgroundColor:'#e3e3e358',
    borderRadius:moderateScale(12),
    width:scale(160),
    padding:moderateScale(8),
    marginHorizontal:scale(10)
  }
})