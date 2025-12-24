import { icons } from "@/constants/logo";
import { ScrollView, Text, View, Image, StyleSheet, Pressable, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Cardsinfo from "@/components/Cardsinfo";
import TimeCard from "@/components/TimeCard";
import { color } from "@/constants/colors";
import QuickCards from "@/components/QuickCards";
import RecentCards from "@/components/RecentCards";
import { Link, useRouter } from "expo-router";
import { scale, verticalScale } from "react-native-size-matters";

export default function Index() {

  const router = useRouter();
      const windowWidth = useWindowDimensions().width
      const windowHeight = useWindowDimensions().height

  return (
    <SafeAreaView style={{ width: windowWidth, height: windowHeight }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileRow}>
            <Pressable style={styles.avatarWrapper} onPress={() => router.push("/profile")}>
              <Image
                source={icons.avatar}
                style={styles.avatar}
                resizeMode="cover"
              />
            </Pressable>

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
              links="/leave/leaveapply"
            />
            <QuickCards
              names="home-work"
              title="WFH Leaves"
              colors="#FFC022"
              links=""
            />
            <QuickCards
              names="phone"
              title="Contact HR"
              colors={color.primary}
              links=""
            />
          </ScrollView>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <View style={styles.recentTitle}>
            <Text style={styles.sectionTitle}>
              Recent Activity
            </Text>
            <Link style={{color:color.primary}} href="/recentactivity/recentList">View More</Link>
          </View>

          <RecentCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

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
    width: 50,
    height: 50,
    borderRadius: 28,
    backgroundColor: color.primarylight,
    alignItems: "center",
    paddingTop: 5,
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
    fontFamily: "rubikMedium",
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
    marginBottom:10
  },

  sectionTitle: {
    fontSize: 20,
    fontFamily: "rubikMedium",
  },

  quickActionsRow: {
    marginTop: 8,
    gap: 12,
    height: verticalScale(57) ,
  },

  recentTitle:{
    display:'flex',
    flexDirection:'row',
    width:scale(310),
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:8
  }
});
