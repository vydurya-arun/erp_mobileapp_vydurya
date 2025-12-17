import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '@/constants/logo'
import { color } from '@/constants/colors'
import Badge from '@/components/Badge'
import { scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CardsProfile from '@/components/CardsProfile'
import PersonCard from '@/components/PersonCard'

export type PersonalDataItem = {
  id: number;
  title: string;
  label: string;
  icon: string
};

const personalData: PersonalDataItem[] = [
  {
    id: 1, title: 'Email', label: 'arunakhil@gmail.com', icon: 'email'
  },
  {
    id: 2, title: 'Phone', label: '+91 9895234288', icon: 'phone'
  },
  {
    id: 3, title: 'Employee Id', label: '#AS3468', icon: 'work'
  },
]


const Profile = () => {
  return (
    <SafeAreaView style={styles.mainScreen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.mainHeading}>Profile</Text>
        <View style={styles.profileMain}>
          <View style={styles.avatarWrapper}>
            <Image
              source={icons.avatar}
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.profileText1}>Arun kumar</Text>
          <Text style={styles.profileText2}>Full-Stack Developer</Text>
          <Badge title='Checked In' />
          <TouchableOpacity style={styles.Editbutton}>
            <MaterialIcons name="edit" size={20} color="black" />
            <Text>Edit Profile</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.cardsContainer}>
          <CardsProfile textColor='#22B3FF' count='98%' title='Attendence' />
          <CardsProfile textColor='#FFC022' count='5' title='Pending' />
          <CardsProfile textColor='#ff6422ff' count='12' title='Leave Balance' />

        </View>
        <View style={styles.personCont}>
          <Text style={styles.profileText2}>PERSONAL INFORMATION</Text>
        </View>
        <PersonCard profile={personalData}/>

        <TouchableOpacity style={styles.logout}>
            <MaterialCommunityIcons name="logout" size={28} color="#C45855" />
            <Text style={{color:'#C45855',fontFamily:'rubikMedium', fontSize:15}}>Log Out</Text>
        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: "rgba(243,244,246,0.5)",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  mainHeading: {
    fontFamily: "Rubik-Medium",
    fontSize: 18
  },
  profileMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 9
  },
  avatarWrapper: {
    width: 108,
    height: 108,
    borderRadius: '50%',
    backgroundColor: color.primarylight,
    alignItems: "center",
    paddingTop: 10
  },
  avatar: {
    width: 95,
    height: 95,
    borderRadius: 42,
  },
  profileText1: {
    fontFamily: "Rubik-Medium",
    lineHeight: 20,
    fontSize: 28
  },
  profileText2: {
    fontSize: 14,
    fontFamily: "Rubik-Medium",
    color: "#8e9195ff",
  },
  Editbutton: {
    backgroundColor: '#ffffff',
    height: verticalScale(30),
    width: scale(120),
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
  },
  cardsContainer: {
    display: "flex",
    flexDirection: 'row',
    gap: 5,
    marginTop: 9
  },
  personCont: {
    marginTop: 15
  },
  logout:{
    marginBottom:70,
    maxWidth:(360),
    width:'100%',
    backgroundColor:'#F3DEDD',
    borderRadius:24,
    display:'flex',
    flexDirection:'row',
    height:verticalScale(40),
    alignItems:'center',
    justifyContent:'center',
    gap:10
  }

})