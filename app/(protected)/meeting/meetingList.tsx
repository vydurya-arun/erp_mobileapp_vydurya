import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useGetAllEmployees } from "@/controller/employeeController";

interface Department {
  _id: string;
  name: string;
  __v: number;
}
interface Position {
  _id: string;
  name: string;
  createdAt: string; // ISO string
  updatedAt: string;
  __v: number;
}

export interface Employee {
  _id: string;
  name: string;
  employeeId: string;
  email: string;
  phone: string;
  department: Department;
  position: Position;
  status: "Active" | "Inactive"; // tighten if possible
  joinDate: string; // ISO date string
  address: string;
  salary: number | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}



const meetingList = () => {

  const { data, isLoading, error } = useGetAllEmployees();

  if (isLoading) {
    return <Text>Loading employees...</Text>;
  }

  return (
    <>
      <Stack.Screen options={{ title: "My Meetings" }} />
      <View style={styles.mainScreen}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <Text>Daily Meetings</Text>

          <View style={{ display: "flex", gap: 8 }}>
            {data.map((emp: Employee) => (
              <View key={emp._id}>
                <Text>{emp.name}</Text>
                <Text>{emp.email}</Text>
                <Text>{emp.department?.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default meetingList;

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: "rgba(243,244,246,0.5)",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
});
