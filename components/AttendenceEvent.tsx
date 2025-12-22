
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { color } from "@/constants/colors";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const AttendenceEvent = () => {
  return (
    <View style={styles.mainCard}>
      <View style={styles.contain}>
        <View style={styles.subContain}>
          <View style={[styles.logoContainer,{backgroundColor:color.primaryVioletLight}]}>
            <MaterialCommunityIcons name="party-popper" size={30} color={color.primaryViolet} />
          </View>
          <View>
            <Text style={styles.subTitle}>Christmas Party</Text>
            <Text>Dec 25, 2025</Text>
          </View>
        </View>

      </View>
      <View style={styles.contain}>
        <View style={styles.subContain}>
          <View style={[styles.logoContainer,{backgroundColor:color.primaryRedLight}]}>
            <MaterialCommunityIcons name="emoticon-sick" size={24} color={color.primaryRed} />
          </View>
          <View>
            <Text style={styles.subTitle}>Sick Leave</Text>
            <Text>Dec 24, 2025</Text>
          </View>
        </View>
        <View style={styles.badge}>
            <Text style={styles.badgeTitle}>01 Day</Text>
        </View>
      </View>
      <View style={styles.contain}>
        <View style={styles.subContain}>
          <View style={[styles.logoContainer,{backgroundColor:color.primaryGreenLight}]}>
            <MaterialCommunityIcons name="check-circle" size={30} color={color.primaryGreen} />
          </View>
          <View>
            <Text style={styles.subTitle}>Regular Work</Text>
            <Text>09:30 AM</Text>
          </View>
        </View>
        <View style={styles.badge}>
            <Text style={styles.badgeTitle}>06:20 hour</Text>
        </View>
      </View>

    </View>
  );
};

export default AttendenceEvent;

const styles = StyleSheet.create({
  mainCard: {
    maxWidth: scale(360),
    width:'100%',
    backgroundColor: "#ffffff",
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    gap: 3,
    paddingLeft: 15,
    paddingRight: 15,
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
    borderRadius: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  badge:{
    height:25,
    backgroundColor:"#eeeeeec9",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:12,
    paddingHorizontal:12
  },
  badgeTitle:{
    fontFamily: 'rubikMedium',
    color:color.textColourLight
  },

  badgeTitleLogOut:{
    fontFamily: 'rubikMedium',
    color:"#C45855"
  },
  subTitle:{
    fontFamily: 'rubikMedium',
    lineHeight: 15
  }
});
