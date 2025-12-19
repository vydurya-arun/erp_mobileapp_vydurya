
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
import TaskCardsType2 from '@/components/TaskCardsType2'
import TaskCard from '@/components/TaskCard'

  export type cardItemsTypes ={
    id:number,
    name:string,
    icon:string,
    count:string,
    colour:string,
    circleColor: string
  }

  const cardItems:cardItemsTypes[] = [
    {id:1,name:'In Progress',icon:'timer-sand-complete', count:'5', colour:color.primary,circleColor:color.primarylight},
    {id:2,name:'Complete',icon:'check-circle-outline', count:'4', colour:color.primaryGreen,circleColor: color.primaryGreenLight},
  ]

  const cardItems2 :cardItemsTypes[] = [
    {id:1,name:'Pending',icon:'alert', count:'2', colour:color.primaryRed,circleColor:color.primaryRedLight},
    {id:2,name:'Accept',icon:'clipboard-check', count:'1', colour:color.primaryViolet,circleColor: color.primaryVioletLight},
  ]

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
        <Text style={{fontFamily:'rubikMedium', fontSize:14,color:'#dff4ffff'}}>Total Assigned Tasks</Text>
        <Text style={{fontFamily:'rubikMedium', fontSize:34,color:'#0E4866'}}>10</Text>
        <View style={styles.subCards}>
          <View style={{width:30,height:30, backgroundColor:'#b9e8ff55', borderRadius:'100%',display:'flex', alignItems:'center',justifyContent:'center'}}>
            <AntDesign name="rise" size={16} color="#dff4ffff" />
          </View>
          <Text style={{fontFamily:'rubikRegular', fontSize:14,color: '#dff4ffff'}}>+3 new this week</Text>
        </View>
        <MaterialCommunityIcons style={styles.icon} name="clipboard-text" size={114} color="#b9e8ff55" />

      </LinearGradient>
      <TaskCardsType1 card={cardItems}/>
      <TaskCardsType2 card={cardItems2}/>
      <View style={styles.recentTitle}>
        <Text style={styles.sectionTitle}>
          Recent Tasks
        </Text>
        <Link style={{color:color.primary}} href="/tasks/taskList">View More</Link>
      </View>
      <View style={styles.taskCards}>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
      </View>
      <View style={styles.recentTitle}>
        <Text style={styles.sectionTitle}>
          Daily Updates
        </Text>
        <Link style={{color:color.primary}} href="/attendence">View More</Link>
      </View>
      <View style={styles.taskCards}>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
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
    recentTitle:{
    display:'flex',
    flexDirection:'row',
    width:scale(310),
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:8,
    marginTop:18
  },
    section: {
    marginTop: 16,
  },
    sectionTitle: {
    fontSize: 20,
    fontFamily: "rubikMedium",
  },
  taskCards:{
    display:'flex',
    gap:7
  }


})