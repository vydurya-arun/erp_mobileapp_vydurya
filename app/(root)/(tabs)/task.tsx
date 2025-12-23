import { View, Text, ScrollView, StyleSheet, Button, Pressable, useWindowDimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import Header from "@/components/Header";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { color } from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import TaskCardsType1 from "@/components/TaskCardsType1";
import TaskCardsType2 from "@/components/TaskCardsType2";
import TaskCard from "@/components/TaskCard";
import Fontisto from "@expo/vector-icons/Fontisto";
import MyIcons from "@/components/MyIcons";
import { icons } from "@/constants/logo";

export type TaskStatus = "pending" | "completed" | "progress" | "accept";
export type cardItemsTypes = {
  id: number;
  name: string;
  icon: any;
  count: string;
  colour: string;
  circleColor: string;
};
export type TaskCardTypes = {
  id: number;
  taskId: string;
  taskTitle: string;
  details: string;
  status: string;
  badge: TaskStatus;
  project: string;
  statusMessage: string;
  statusMessageIcon: any;
  colourStatus: string;
};

const taskCardData: TaskCardTypes[] = [
  {
    id: 1,
    taskId: "AT101",
    taskTitle: "Design Login Screen",
    details: "Create UI for login and signup screens",
    status: "Pending approval",
    badge: "pending",
    project: "Vydurya ERP",
    statusMessage: "Waiting for review",
    statusMessageIcon: "warning-amber",
    colourStatus: color.primaryRed,
  },
  {
    id: 2,
    taskId: "AT102",
    taskTitle: "API Integration",
    details: "Integrate authentication APIs",
    status: "In Progress",
    badge: "progress",
    project: "Vydurya ERP",
    statusMessage: "Dec-12-2025, 10.00PM",
    statusMessageIcon: "calendar-month",
    colourStatus: color.primary,
  },
  {
    id: 3,
    taskId: "AT103",
    taskTitle: "Deploy Mobile App",
    details: "Build and deploy APK to production",
    status: "Completed",
    badge: "completed",
    project: "Dev Trades",
    statusMessage: "Task completed successfully",
    statusMessageIcon: "check-circle-outline",
    colourStatus: color.primaryGreen,
  },
];

const cardItems: cardItemsTypes[] = [
  {
    id: 1,
    name: "In Progress",
    icon: "timer-sand-complete",
    count: "5",
    colour: color.primary,
    circleColor: color.primarylight,
  },
  {
    id: 2,
    name: "Complete",
    icon: "check-circle-outline",
    count: "4",
    colour: color.primaryGreen,
    circleColor: color.primaryGreenLight,
  },
];

const cardItems2: cardItemsTypes[] = [
  { id: 1, name: "Overdue", icon: "alert", count: "2", colour: color.primaryRed, circleColor: color.primaryRedLight },
  {
    id: 2,
    name: "Accept",
    icon: "clipboard-check",
    count: "1",
    colour: color.primaryViolet,
    circleColor: color.primaryVioletLight,
  },
];

const Task = () => {
  const router = useRouter();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={{ width: windowWidth, height: windowHeight }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Header title="My Task" />
        <LinearGradient
          colors={["#7AD1FF", "#4EC2FF", "#209ADA"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.totalCard}
        >
          <Text style={{ fontFamily: "rubikMedium", fontSize: 14, color: "#dff4ffff" }}>Total Assigned Tasks</Text>
          <Text style={{ fontFamily: "rubikMedium", fontSize: 34, color: "#0E4866" }}>10</Text>
          <View style={styles.subCards}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#b9e8ff55",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="rise" size={16} color="#dff4ffff" />
            </View>
            <Text style={{ fontFamily: "rubikRegular", fontSize: 14, color: "#dff4ffff" }}>+3 new this week</Text>
          </View>
          <MaterialCommunityIcons style={styles.icon} name="clipboard-text" size={114} color="#b9e8ff55" />
        </LinearGradient>
        <TaskCardsType1 card={cardItems} />
        <TaskCardsType2 card={cardItems2} />
        <View style={styles.recentTitle}>
          <Text style={styles.sectionTitle}>Manage Tasks</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: verticalScale(70), paddingHorizontal: 12 }}
          contentContainerStyle={{ alignItems: "center", gap: 25 }}
        >
          <Pressable style={styles.mainLiks} onPress={() => router.push("/dailyreport/dailyList")}>
            <MyIcons icon={icons.Update} color={color.primary} size={36} style={{ position: "absolute", top: scale(-11) }}/>
            <Text style={{ textAlign: "center", fontFamily: "rubikMedium", fontSize: 11, color: color.textColour }}>
              Daily Update
            </Text>
          </Pressable>
          <Pressable style={styles.mainLiks} onPress={() => router.push("/tasks/notes")}>
              <MyIcons icon={icons.editFile} color={color.primaryViolet} size={32} style={{ position: "absolute", top: scale(-11) }}/>
            <Text style={{ textAlign: "center", fontFamily: "rubikMedium", fontSize: 11, color: color.textColour }}>
              Task Notes
            </Text>
          </Pressable>
          <Pressable style={styles.mainLiks} onPress={() => router.push("/meeting/meetingList")}>
              <MyIcons icon={icons.meeting} color={color.primaryGreen} size={38} style={{ position: "absolute", top: scale(-14) }}/>
            <Text style={{ textAlign: "center", fontFamily: "rubikMedium", fontSize: 11, color: color.textColour }}>
              My Meetings
            </Text>
          </Pressable>
          <Pressable style={styles.mainLiks} onPress={() => router.push("/meeting/meetingList")}>
            <MyIcons icon={icons.group} color={color.primaryOrange} size={46} style={{ position: "absolute", top:scale(-16) }}/>
            <Text style={{ textAlign: "center", fontFamily: "rubikMedium", fontSize: 11, color: color.textColour }}>
              My   Teams
            </Text>
          </Pressable>
        </ScrollView>
        <View style={styles.recentTitle}>
          <Text style={styles.sectionTitle}>Recent Tasks</Text>
          <Link style={{ color: color.primary }} href="/tasks/taskList">
            View More
          </Link>
        </View>

        <Pressable style={styles.taskCards} onPress={() => router.push("/tasks/1")}>
          {taskCardData.map((item: TaskCardTypes, index: number) => (
            <TaskCard key={index} detailCard={item} />
          ))}
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Task;

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  totalCard: {
    maxWidth: scale(360),
    width: "100%",
    borderRadius: 12,
    height: verticalScale(110),
    marginVertical: 10,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  icon: {
    position: "absolute",
    right: -20,
    top: 25,
  },
  subCards: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  recentTitle: {
    display: "flex",
    flexDirection: "row",
    width: scale(310),
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    marginTop:8
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "rubikMedium",
  },
  taskCards: {
    display: "flex",
    gap: 7,
  },
  mainLiks: {
    width: scale(50),
    height: scale(50),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 7,
    backgroundColor: "white",
    borderRadius: 60,
    position: "relative",
  },
});
