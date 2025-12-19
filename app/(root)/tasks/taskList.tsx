
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { TaskCardTypes } from '../(tabs)/task'
import { color } from '@/constants/colors';
import TaskCard from '@/components/TaskCard';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BadgeV2 from '@/components/BadgeV2';

const taskCardData: TaskCardTypes[] = [
  {
    id: 1,
    taskId: 'AT101',
    taskTitle: 'Design Login Screen',
    details: 'Create UI for login and signup screens',
    status: 'Pending approval',
    badge: 'pending',
    project: 'Vydurya ERP',
    statusMessage: 'Waiting for review',
    statusMessageIcon: 'warning-amber',
    colourStatus: color.primaryRed
  },
  {
    id: 2,
    taskId: 'AT102',
    taskTitle: 'API Integration',
    details: 'Integrate authentication APIs',
    status: 'In Progress',
    badge: 'progress',
    project: 'Vydurya ERP',
    statusMessage: 'Dec-12-2025, 10.00PM',
    statusMessageIcon: 'calendar-month',
    colourStatus: color.primary
  },
  {
    id: 3,
    taskId: 'AT103',
    taskTitle: 'Deploy Mobile App',
    details: 'Build and deploy APK to production',
    status: 'Completed',
    badge: 'completed',
    project: 'Dev Trades',
    statusMessage: 'Task completed successfully',
    statusMessageIcon: 'check-circle-outline',
    colourStatus: color.primaryGreen
  },
  {
    id: 4,
    taskId: 'AT104',
    taskTitle: 'Deploy Mobile App',
    details: 'Build and deploy APK to production',
    status: 'Accept',
    badge: 'accept',
    project: 'Vydurya ERP',
    statusMessage: 'Dec-12-2025, 10.00PM',
    statusMessageIcon: 'calendar-month',
    colourStatus: color.primaryViolet
  },
    {
    id: 5,
    taskId: 'AT103',
    taskTitle: 'Deploy Mobile App',
    details: 'Build and deploy APK to production',
    status: 'Completed',
    badge: 'completed',
    project: 'Dev Trades',
    statusMessage: 'Task completed successfully',
    statusMessageIcon: 'check-circle-outline',
    colourStatus: color.primaryGreen
  },
  {
    id: 6,
    taskId: 'AT101',
    taskTitle: 'Design Login Screen',
    details: 'Create UI for login and signup screens',
    status: 'Pending approval',
    badge: 'pending',
    project: 'Vydurya ERP',
    statusMessage: 'Waiting for review',
    statusMessageIcon: 'warning-amber',
    colourStatus: color.primaryRed
  },
  {
    id: 7,
    taskId: 'AT101',
    taskTitle: 'Design Login Screen',
    details: 'Create UI for login and signup screens',
    status: 'Pending approval',
    badge: 'pending',
    project: 'Vydurya ERP',
    statusMessage: 'Waiting for review',
    statusMessageIcon: 'warning-amber',
    colourStatus: color.primaryRed
  },
];

export type FilerTagsProps={
  id:number,
  status:string,
  tagcolor:string,
  outline:string
}

const FilerTags : FilerTagsProps[]=[
  {id:1,status:'complete',tagcolor:color.primaryGreen,outline:color.primaryGreenLight},
  {id:2,status:'Pending',tagcolor:color.primary,outline:color.primarylight},
  {id:3,status:'Overdue',tagcolor:color.primaryRed,outline:color.primaryRedLight},
  {id:4,status:'Accept',tagcolor:color.primaryViolet,outline:color.primaryVioletLight},
]

const taskList = () => {

  const router = useRouter()

  return (
    <>
      <Stack.Screen options={{ title: 'My All Tasks' }} />
      <View style={styles.mainScreen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.filter}>
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={24} color="black" />
              <TextInput style={styles.searchInput}  placeholder='Search task...'/>
            </View>
            <View style={styles.filtersub}>
              <MaterialIcons name="filter-list" size={28} color="black" />
            </View>

          </View>
          <View style={styles.filerTags}>
            {FilerTags.map((item:FilerTagsProps,index:number)=>(
              <BadgeV2 key={index} title={item.status} textColor={item.tagcolor} outColor={item.outline}/>
            ))}
            
          </View>

          <Pressable style={styles.taskCards} onPress={() => router.push('/tasks/1')}>
            {taskCardData.map((item: TaskCardTypes, index: number) => (
              <TaskCard key={index} detailCard={item} />
            ))}

          </Pressable>
        </ScrollView>

      </View>
    </>
  )
}

export default taskList

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: "rgba(243,244,246,0.5)",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
  taskCards: {
    display: 'flex',
    gap: 7
  },
  searchContainer:{
    backgroundColor:'white',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
    borderRadius:12,
    width:'85%',
    overflow:'hidden',
  },
  filter:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:12,
    marginVertical:10,
    justifyContent:'space-between'
  },
  filtersub:{
   backgroundColor:'white',
    paddingHorizontal:10,
    paddingVertical:6,
    borderRadius:12,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  searchInput:{
    paddingHorizontal:10,
    width:'90%',
  },
  filerTags:{
    display:'flex',
    flexDirection:'row',
    marginBottom:10,
    gap:6
  }
})