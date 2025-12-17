import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { color } from "@/constants/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const RecentCards = () => {
  return (
    <View style={styles.mainCard}>
      <View style={styles.contain}>
        <View style={styles.subContain}>
          <View style={styles.logoContainer}>
            <MaterialIcons name="location-pin" size={30} color="#1FC155" />
          </View>
          <View>
            <Text style={styles.subTitle}>Check In</Text>
            <Text>09:30 AM</Text>
          </View>
        </View>
        <View style={styles.badge}>
            <Text style={styles.badgeTitle}>On Time</Text>
        </View>
      </View>
      <View style={styles.contain}>
        <View style={styles.subContain}>
          <View style={styles.logoContainer}>
            <MaterialIcons name="location-pin" size={30} color="#1FC155" />
          </View>
          <View>
            <Text style={styles.subTitle}>Check In</Text>
            <Text>09:30 AM</Text>
          </View>
        </View>
        <View style={styles.badge}>
            <Text style={styles.badgeTitle}>On Time</Text>
        </View>
      </View>
      <View style={styles.contain}>
        <View style={styles.subContain}>
          <View style={styles.logoContainerLogout}>
            <MaterialIcons name="login" size={30} color="#C45855" />
          </View>
          <View>
            <Text style={styles.subTitle}>Check Out</Text>
            <Text>09:30 AM</Text>
          </View>
        </View>
        <View style={styles.badgeLogout}>
            <Text style={styles.badgeTitleLogOut}>Late</Text>
        </View>
      </View>
      <View style={styles.contain}>
        <View style={styles.subContain}>
          <View style={styles.logoContainer}>
            <MaterialIcons name="location-pin" size={30} color="#1FC155" />
          </View>
          <View>
            <Text style={styles.subTitle}>Check In</Text>
            <Text>09:30 AM</Text>
          </View>
        </View>
        <View style={styles.badge}>
            <Text style={styles.badgeTitle}>On Time</Text>
        </View>
      </View>
    </View>
  );
};

export default RecentCards;

const styles = StyleSheet.create({
  mainCard: {
    width: scale(320),
    backgroundColor: "#ffffff",
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    gap: 3,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom:70,
    boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1)'
  },
  contain: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems:"center",
    justifyContent:"space-between",
    height:verticalScale(69),
    borderBottomWidth:0.5,
    borderColor:"#6C7278",
  },
  subContain:{
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems:"center",
  },
  logoContainer: {
    width: scale(40),
    height: verticalScale(38),
    backgroundColor: "#D2F3DD",
    borderRadius: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainerLogout:{
    width: scale(40),
    height: verticalScale(38),
    backgroundColor: "#F3DEDD",
    borderRadius: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  badge:{
    width:80,
    height:25,
    backgroundColor:"#D2F3DD",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:12,
  },
  badgeTitle:{
    fontFamily: 'Rubik-Medium',
    color:"#1FC155"
  },
  badgeLogout:{
    width:80,
    height:25,
    backgroundColor:"#F3DEDD",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:12,
  },
  badgeTitleLogOut:{
    fontFamily: 'Rubik-Medium',
    color:"#C45855"
  },
  subTitle:{
    fontFamily: 'Rubik-Medium',
    lineHeight: 12
  }
});
