
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import Header from '@/components/Header'
import { scale, verticalScale } from 'react-native-size-matters'
import { color } from '@/constants/colors'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import TaskCardsType1 from '@/components/TaskCardsType1'

const Task = () => {
  return (
    <SafeAreaView style={styles.mainScreen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
      <Header title='My Task'/>
      <LinearGradient
        colors={['#7AD1FF','#4EC2FF','#209ADA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.totalCard}
       >
        <Text style={{fontFamily:'rubikMedium', fontSize:14,color:'#D3F0FF'}}>Total Assigned Tasks</Text>
        <Text style={{fontFamily:'rubikMedium', fontSize:34,color:'#0E4866'}}>10</Text>
        <View style={styles.subCards}>
          <View style={{width:30,height:30, backgroundColor:'#b9e8ff55', borderRadius:'100%',display:'flex', alignItems:'center',justifyContent:'center'}}>
            <AntDesign name="rise" size={16} color="#D3F0FF" />
          </View>
          <Text style={{fontFamily:'rubikRegular', fontSize:14,color: '#D3F0FF'}}>+3 new this week</Text>
        </View>
        <MaterialCommunityIcons style={styles.icon} name="clipboard-text" size={114} color="#b9e8ff55" />

      </LinearGradient>
      <TaskCardsType1/>
      <View style={styles.dashCards}>
        <View style={styles.subDashCard}><Text>1</Text></View>
        <View style={styles.subDashCard}><Text>2</Text></View>
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Task

const styles = StyleSheet.create({
    mainScreen: {
    flex: 1,
    backgroundColor: "rgba(243,244,246,0.5)",
  },
    scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  totalCard:{
    maxWidth: scale(360),
    width:'100%',
    borderRadius:12,
    height:verticalScale(110),
    marginVertical:10,
    boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    position:'relative',
    overflow:'hidden',
    display:'flex',
    justifyContent:'center',
    padding:20,
  },
  icon:{
    position:'absolute',
    right:-20,
    top:25
  },
  subCards:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:12
  },
  dashCards:{
    maxWidth: scale(360),
    width:'100%',
    marginVertical:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  subDashCard:{
    maxWidth: scale(150),
    width:'100%',
    borderRadius:12,
    height:verticalScale(110),
    boxShadow:'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    display:'flex',
    justifyContent:'center',
    padding:20,
  }
})