import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { color } from "@/constants/colors";
import { useCheckInController, useCheckOutController } from "@/controller/employeeController";

const TimeCard = () => {
  const [checkedIn, setCheckedIn] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const [attendance, setAttendance] = useState(null);
  const [lastSession, setLastSession] = useState(null);

    const CheckInMutation = useCheckInController();
    const CheckOutMutation = useCheckInController();


  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const handleCheckIn = async () => {
    try {
      const data = await CheckInMutation.mutateAsync();
      if (data?.success && data?.attendance) {
        const { attendance } = data;
        setAttendance(attendance);
        const sessions = attendance.sessions || [];
        if (sessions.length > 0) {
          const last = sessions[sessions.length - 1];
          setLastSession(last);
          setCheckedIn(!last.checkOut);
        }
      }
    } catch (error) {
      console.error("Error during check-in:", error);
    } 
  };

  const handleCheckOut = async () => {
    try {
      
      const data = await CheckOutMutation.mutateAsync();
      if (data?.success && data?.attendance) {
        const { attendance } = data;
        setAttendance(attendance);
        const sessions = attendance.sessions || [];
        if (sessions.length > 0) {
          const last = sessions[sessions.length - 1];
          setLastSession(last);
          setCheckedIn(!last.checkOut);
        }
      }
    } catch (error) {
      console.error("Error during check-out:", error);
    }
  };


  return (
    <View style={styles.card}>
      <Text style={styles.dateText}>{mounted ? formatDate(currentTime) : ""}</Text>
      <Text style={styles.timeText}>{mounted ? formatTime(currentTime) : "--:--:--"}</Text>
      <TouchableOpacity style={styles.button} disabled={CheckInMutation.isPending || CheckOutMutation.isPending} onPress={() => (checkedIn ? handleCheckOut() : handleCheckIn())}>
        <Text style={styles.buttomText}>{checkedIn ? "Check Out" : "Check In"}</Text> 
      </TouchableOpacity>
    </View>
  );
};

export default TimeCard;

const styles = StyleSheet.create({
  card: {
    maxWidth: scale(360),
    width: "100%",
    height: verticalScale(120),
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#6c6c6cff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  dateText: {
    fontWeight: 600,
    fontSize: 16,
    color: "#6C7278",
  },
  timeText: {
    fontFamily: "RubikSemiBold",
    fontSize: 40,
    lineHeight: 50,
    color: color.textColour,
  },
  button: {
    backgroundColor: color.primary,
    width: 150,
    borderRadius: 24,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
  },
  buttomText: {
    fontFamily: "RubikSemiBold",
    color: "#ffffff",
  },
});
