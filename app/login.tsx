import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { images } from "@/constants/image";
import { icons } from "@/constants/logo";
import { color } from "@/constants/colors";
import { moderateScale, scale } from "react-native-size-matters";

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.flex}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Logo */}
            <Image source={images.logo} resizeMode="contain" style={styles.logo} />

            <Text style={styles.welcome}>WELCOME TO VYDURYA</Text>

            {/* Title */}
            <View style={styles.header}>
              <Text style={styles.title}>Employee Login Now</Text>
              <Text style={styles.subtitle}>
                Create an account or log in to explore Vydurya employee app
              </Text>
            </View>

            {/* Email */}
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="eg: example@gmail.com"
                style={styles.input}
              />
              <Image source={icons.person} resizeMode="contain" style={styles.inputIcon} />
            </View>

            {/* Password */}
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                secureTextEntry
                placeholder="******"
                style={styles.input}
              />
              <Image source={icons.visibile} resizeMode="contain" style={styles.inputIcon} />
            </View>

            {/* Forgot password */}
            <View style={styles.forgotWrapper}>
              <Text style={styles.forgotText}>Forgot Password ?</Text>
            </View>

            {/* Login button */}
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Or login with</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Don’t have an account?</Text>
              <Text style={styles.footerLink}> Contact HR.</Text>
            </View>

          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  flex: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: scale(16),
    paddingVertical: moderateScale(10),
  },

  logo: {
    width: 130,
    height: 130,
  },

  welcome: {
    fontSize: 14,
    fontFamily: "rubikMedium",
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: scale(5),
  },

  title: {
    fontSize: moderateScale(30),
    textAlign: "center",
    color: "#1F2937",
    fontFamily: "RubikSemiBold",
  },

  subtitle: {
    fontSize: moderateScale(14),
    color: color.textColourLight,
    textAlign: "center",
    fontFamily: "rubikLight",
  },

  inputBlock: {
    width: "100%",
    maxWidth: 420,
    marginBottom: 20,
    paddingHorizontal: 24,
    position: "relative",
  },

  label: {
    fontSize: 16,
    color: color.textColourLight,
    marginBottom: 4,
    fontFamily: "Rubik-Light",
  },

  input: {
    height: 48,
    borderWidth: 0.5,
    borderColor: color.textColourLight,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingRight: 48,
  },

  inputIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 36,
    top: 38,
  },

  forgotWrapper: {
    width: "100%",
    maxWidth: 420,
    paddingHorizontal: 24,
    marginBottom: 24,
  },

  forgotText: {
    textAlign: "right",
    color: color.primary,
    fontFamily: "Rubik-Medium",
  },

  loginBtn: {
    width: "90%",
    maxWidth: 420,
    height: 48,
    backgroundColor:color.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Rubik-SemiBold",
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },

  dividerLine: {
    height: 0.5,
    width: 96,
    backgroundColor: color.textColourLight,
  },

  dividerText: {
    fontSize: 14,
    fontFamily: "rubikLight",
  },

  footer: {
    flexDirection: "row",
  },

  footerText: {
    color: color.textColourLight,
    fontFamily: "rubikMedium",
  },

  footerLink: {
    color: color.primary,
    fontFamily: "rubikMedium",
  },
});
