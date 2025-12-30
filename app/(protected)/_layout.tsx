import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@/context/AuthProvider'


const _layout = () => {
  const {isLoggedIn,isReady} = useAuth()

  if(!isReady){
    return null;
  }
  console.log("IsLoggedIn",isLoggedIn)
  console.log("IsReady",isReady)

  if(!isLoggedIn){
    return<Redirect href="/login"/>
  }

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
    </Stack>
  )
}

export default _layout