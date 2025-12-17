import { icons } from "@/constants/logo";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Cardsinfo from "@/components/Cardsinfo";
import TimeCard from "@/components/TimeCard";
import { color } from "@/constants/colors";
import QuickCards from "@/components/QuickCards";
import RecentCards from "@/components/RecentCards";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileRow}>
            <View style={styles.avatarWrapper}>
              <Image
                source={icons.avatar}
                style={styles.avatar}
                resizeMode="cover"
              />
            </View>

            <View style={styles.welcomeText}>
              <Text style={styles.welcome}>Welcome</Text>
              <Text style={styles.username}>Arun Kumar</Text>
            </View>
          </View>

          <MaterialIcons
            name="notifications"
            size={26}
            color={color.textColour}
          />
        </View>

        {/* Time Card */}
        <TimeCard />

        {/* Info Cards */}
        <View style={styles.infoCardsRow}>
          <Cardsinfo
            name="clock"
            colour="#22B3FF"
            title="today hours"
            count="6h 33m"
            bgColor="#EAF7FF"
          />
          <Cardsinfo
            name="umbrella-beach"
            colour="#FFC022"
            title="Leave Balance"
            count="12d"
            bgColor="#FFF2D3"
          />
          <Cardsinfo
            name="note-check"
            colour="#1FC155"
            title="tasks"
            count="4"
            bgColor="#D2F3DD"
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.quickActionsRow}
          >
            <QuickCards
              names="note-alt"
              title="Apply Leaves"
              colors={color.primary}
            />
            <QuickCards
              names="home-work"
              title="WFH Leaves"
              colors="#FFC022"
            />
            <QuickCards
              names="phone"
              title="Contact HR"
              colors={color.primary}
            />
          </ScrollView>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.mb8]}>
            Recent Activity
          </Text>
          <RecentCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(243,244,246,0.5)", // gray-100/50
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  avatarWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: color.primarylight,
    alignItems: "center",
    paddingTop: 2,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },

  welcomeText: {
    justifyContent: "center",
  },

  welcome: {
    fontSize: 16,
    color: "#6C7278",
    lineHeight: 16,
  },

  username: {
    fontSize: 20,
    fontFamily: "Rubik-Medium",
    color: color.textColour,
    lineHeight: 24,
  },

  infoCardsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },

  section: {
    marginTop: 16,
  },

  sectionTitle: {
    fontSize: 24,
    fontFamily: "Rubik-Medium",
  },

  quickActionsRow: {
    marginTop: 8,
    gap: 12,
    height: 57,
  },

  mb8: {
    marginBottom: 8,
  },
});
