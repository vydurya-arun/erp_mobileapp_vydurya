import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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
            minHeight:75,
        }
    }}>
        <Tabs.Screen 
            name='index'
            options={{
                title:'Home',
                headerShown:false,
                tabBarIcon:({focused})=>(
                <TabIcon focused={focused} title='Home' name='home' sizes={29}/>
                )
            }}
        />
        <Tabs.Screen 
            name='attendence'
            options={{
                title:'Attendence',
                headerShown:false,
                tabBarIcon:({focused})=>(
                <TabIcon focused={focused} title='Attendence' name="calendar-today" sizes={23}/>
                )
            }}
        />
        <Tabs.Screen 
            name='task'
            options={{
                title:'Task',
                headerShown:false,
                tabBarIcon:({focused})=>(
                <TabIcon focused={focused} title='Task' name="task-alt" sizes={26}/>
                )
            }}
        />
        <Tabs.Screen 
            name='profile'
            options={{
                title:'Profile',
                headerShown:false,
                tabBarIcon:({focused})=>(
                <TabIcon focused={focused} title='profile' name="person" sizes={26}/>
                )
            }}
        />
    
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 80,      
    width: 80,       
    paddingTop: 20,  
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    fontSize: 14,  
    marginTop: 4,   
  },
});
