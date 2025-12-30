import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useProfile } from "@/controller/authController";




const meetingList = () => {

  const { data, isLoading,isError } = useProfile();

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
            {data?.profile.name}
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
