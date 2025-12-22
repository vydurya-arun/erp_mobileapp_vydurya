import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const TabIcon = ({focused,title,name,sizes}:{focused:boolean, title:string,name:any,sizes?: number | undefined})=>(
    <View style={styles.container}>
      <MaterialIcons
        name={name}
        size={sizes}
        color={focused ? "#22B3FF" : "#8B8B8B"}
      />
      <Text
        style={[
          styles.label,
          { color: focused ? "#22B3FF" : "#8B8B8B" },
        ]}
      >
        {title}
      </Text>
    </View>
)

const TabsLayout = () => {

  return (
    <Tabs screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:{
            backgroundColor:'white',
            position:'absolute',
            borderTopColor:'#0061ff1a',
            borderTopWidth:1,
            minHeight:verticalScale(61),
            paddingTop: verticalScale(10)
        }
    }}>
        <Tabs.Screen 
            name='index'
            options={{
                title:'Home',
                headerShown:false,
                tabBarIcon:({focused})=>(
                <TabIcon focused={focused} title='Home' name='home-filled' sizes={moderateScale(26)}/>
                )
            }}
        />
        <Tabs.Screen 
            name='attendence'
            options={{
                title:'Attendance',
                headerShown:false,
                tabBarIcon:({focused})=>(
                <TabIcon focused={focused} title='Attendence' name="calendar-today" sizes={moderateScale(24)}/>
                )
            }}
        />
        <Tabs.Screen 
            name='task'
            options={{
                title:'Task',
                headerShown:false,
                tabBarIcon:({focused})=>(
                <TabIcon focused={focused} title='Task' name="task-alt" sizes={moderateScale(26)}/>
                )
            }}
        />
        <Tabs.Screen 
            name='profile'
            options={{
                title:'Profile',
                headerShown:false,
                tabBarIcon:({focused})=>(
                <TabIcon focused={focused} title='profile' name="person" sizes={moderateScale(26)}/>
                )
            }}
        />
    
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection: "column",
    height: verticalScale(40),      
    width: scale(56) ,         
    alignItems: "center",
    justifyContent: "center",
    gap:3
  },

  label: {
    fontSize: moderateScale(11) , 
    lineHeight:moderateScale(13)
  },
});
