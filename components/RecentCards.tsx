import { color } from "@/constants/colors";
import { AttendanceSession } from "@/controller/employeeController";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

type ActivityType = 'Check In' | 'Check Out';
type StatusType = 'On Time' | 'Late';

interface ActivityItem {
  id: string;
  type: ActivityType;
  time: string;
  status: StatusType;
}

interface RecentCardsProps {
  data?: AttendanceSession[];
  filter?: 'All' | 'On Time' | 'Late';
}

const RecentCards: React.FC<RecentCardsProps> = ({ data = [], filter = 'All' }) => {
  // Flatten sessions into individual events
  const activityData: ActivityItem[] = data.flatMap((session) => {
    const events: ActivityItem[] = [];
    
    // Check In Event
    events.push({
      id: `${session._id}_in`,
      type: 'Check In',
      time: session.checkIn_ist,
      status: 'On Time', // Defaulting to On Time, logic can be refined
    });

    // Check Out Event (if exists)
    if (session.checkIn_ist && session.checkOut_ist) {
      events.push({
        id: `${session._id}_out`,
        type: 'Check Out',
        time: session.checkOut_ist,
        status: 'On Time',
      });
    }

    return events;
  });

  const filteredData = filter === 'All'
    ? activityData
    : activityData.filter(item => item.status === filter);

  return (
    <View style={styles.mainCard}>
      {filteredData.map((item) => (
        <View key={item.id} style={styles.contain}>
          <View style={styles.subContain}>
            <View style={item.type === 'Check In' ? styles.logoContainer : styles.logoContainerLogout}>
              <MaterialIcons 
                name={item.type === 'Check In' ? "location-pin" : "logout"} 
                size={24} 
                color={item.type === 'Check In' ? "#1FC155" : "#C45855"} 
              />
            </View>
            <View>
              <Text style={styles.subTitle}>{item.type}</Text>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          </View>
          <View style={item.status === 'On Time' ? styles.badge : styles.badgeLogout}>
            <Text style={item.status === 'On Time' ? styles.badgeTitle : styles.badgeTitleLogOut}>
              {item.status}
            </Text>
          </View>
        </View>
      ))}
      {filteredData.length === 0 && (
        <View style={styles.noData}>
          <Text style={{ color: color.textColourLight }}>No activities found.</Text>
        </View>
      )}
    </View>
  );
};

export default RecentCards;

const styles = StyleSheet.create({
  mainCard: {
    maxWidth: scale(360),
    width: '100%',
    backgroundColor: "#ffffff",
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    gap: 3,
    paddingLeft: 15,
    paddingRight: 15,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
  },
  contain: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "space-between",
    height: verticalScale(69),
    borderBottomWidth: 0.5,
    borderColor: "#6C7278",
  },
  subContain: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
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
  logoContainerLogout: {
    width: scale(40),
    height: verticalScale(38),
    backgroundColor: "#F3DEDD",
    borderRadius: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    width: 80,
    height: 25,
    backgroundColor: "#D2F3DD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  badgeTitle: {
    fontFamily: 'rubikMedium',
    color: "#1FC155"
  },
  badgeLogout: {
    width: 80,
    height: 25,
    backgroundColor: "#F3DEDD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  badgeTitleLogOut: {
    fontFamily: 'rubikMedium',
    color: "#C45855"
  },
  subTitle: {
    fontFamily: 'rubikMedium',
    fontSize: moderateScale(14),
    color: color.textColour,
  },
  timeText: {
    fontSize: moderateScale(12),
    color: color.textColourLight,
    fontFamily: 'rubikRegular',
  },
  noData: {
    padding: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  }
});
