import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { color } from "@/constants/colors";

const TimeCard = () => {
  const [checkedIn, setCheckedIn] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

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

  return (
    <View style={styles.card}>
      <Text style={styles.dateText}>{mounted ? formatDate(currentTime) : ""}</Text>
      <Text style={styles.timeText}>{mounted ? formatTime(currentTime) : "--:--:--"}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttomText}>Check In</Text>
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
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
  },
  dateText: {
    fontWeight: "semibold",
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
