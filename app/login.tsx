import LoginSuccessModal from "@/components/LoginSuccessModal";
import MyIcons from "@/components/MyIcons";
import Toast from "@/components/Toast";
import { color } from "@/constants/colors";
import { images } from "@/constants/image";
import { icons } from "@/constants/logo";
import { useAuth } from "@/context/AuthProvider";
import { useResponsive } from "@/hooks/useResponsive";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale } from "react-native-size-matters";
import { z } from "zod";

const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const router = useRouter();
  const { logIn } = useAuth();
  const { isLandscape, isTablet, wp, hp, width, height } = useResponsive();
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: 'success' as 'success' | 'error' | 'info', title: '', message: '' });

  const showToast = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    setToast({ visible: true, type, title, message });
  };

  const handleForgotPassword = () => {
    showToast('info', 'Feature Unavailable', 'This feature is coming soon!');
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

const onSubmit = async (data: LoginFormData) => {
  try {
    const res = await logIn(data);

    if (!res.success) {
      showToast("error", "Login Failed", res.message);
      return;
    }

    setShowSuccessModal(true);

    setTimeout(() => {
      setShowSuccessModal(false);
      router.replace("/");
    }, 800);

  } catch (err: any) {
    const message =
      err?.response?.data?.message ||
      err?.message ||
      "Something went wrong";

    showToast("error", "Login Error", message);
  }
};

  const onError = (errors: any) => {
    const errorMessage = errors.email?.message || errors.password?.message || "Invalid input";
    showToast('error', 'Validation Error', errorMessage);
  };

  // Dynamic calculations for responsive layout
  const containerPadding = isTablet ? moderateScale(40) : moderateScale(16);
  const logoSize = isTablet
    ? moderateScale(180)
    : isLandscape
      ? moderateScale(100)
      : moderateScale(130);

  const inputMaxWidth = isTablet || isLandscape ? wp(40) : "100%";
  const contentMaxWidth = isTablet ? 600 : 420;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.flex}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              styles.scrollContent,
              { paddingHorizontal: containerPadding, minHeight: isLandscape ? 'auto' : height },
            ]}
          >
            <View style={[
              styles.mainContainer,
              isLandscape && !isTablet ? styles.rowContainer : styles.columnContainer
            ]}>

              {/* Left Section (Logo & Welcome) - Side by side in Landscape mobile */}
              <View style={[
                styles.headerSection,
                isLandscape && !isTablet && styles.headerSectionLandscape
              ]}>
                <Image
                  source={images.logo}
                  resizeMode="contain"
                  style={[styles.logo, { width: logoSize, height: logoSize }]}
                />
                <Text style={styles.welcome}>WELCOME TO VYDURYA</Text>

                <View style={styles.headerTextContainer}>
                  <Text style={[styles.title, isTablet && styles.titleTablet]}>Employee Login Now</Text>
                  <Text style={[styles.subtitle, isTablet && styles.subtitleTablet]}>
                    Create an account or log in to explore Vydurya employee app
                  </Text>
                </View>
              </View>

              {/* Right/Bottom Section (Form) */}
              <View style={[
                styles.formSection,
                isLandscape && !isTablet && styles.formSectionLandscape,
                { maxWidth: isLandscape && !isTablet ? '50%' : contentMaxWidth }
              ]}>


                {/* Email */}
                <View style={styles.inputBlock}>
                  <Text style={[styles.label, isTablet && styles.labelTablet]}>Email</Text>
                  <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholder="eg: example@gmail.com"
                        style={[
                          styles.input,
                          isTablet && styles.inputTablet,
                          errors.email && { borderColor: color.primaryRed }
                        ]}
                        placeholderTextColor={color.textColourLight}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                  />
                  <View style={[styles.inputIcon, isTablet && styles.inputIconTablet]}>
                    <MyIcons icon={icons.person} size={isTablet ? moderateScale(28) : moderateScale(24)} color={color.textColourLight} />
                  </View>
                  {errors.email && (
                    <Text style={styles.errorText}>{errors.email.message}</Text>
                  )}
                </View>

                {/* Password */}
                <View style={styles.inputBlock}>
                  <Text style={[styles.label, isTablet && styles.labelTablet]}>Password</Text>
                  <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        secureTextEntry={!showPassword}
                        placeholder="******"
                        style={[
                          styles.input,
                          isTablet && styles.inputTablet,
                          errors.password && { borderColor: color.primaryRed }
                        ]}
                        placeholderTextColor={color.textColourLight}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: moderateScale(16), top: moderateScale(38), padding: 5 }}
                  >
                    <MyIcons
                      icon={showPassword ? icons.visibileon : icons.visibileoff}
                      size={isTablet ? moderateScale(28) : moderateScale(22)}
                      color={showPassword ? color.primary : color.textColourLight}
                    />
                  </TouchableOpacity>
                  {errors.password && (
                    <Text style={styles.errorText}>{errors.password.message}</Text>
                  )}
                </View>

                {/* Forgot password */}
                <View style={styles.forgotWrapper}>
                  <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={[styles.forgotText, isTablet && styles.forgotTextTablet]}>
                      Forgot Password ?
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Login button */}
                <TouchableOpacity
                  style={[styles.loginBtn, isTablet && styles.loginBtnTablet]}
                  onPress={handleSubmit(onSubmit, onError)}
                >
                  <Text style={[styles.loginText, isTablet && styles.loginTextTablet]}>Login</Text>
                </TouchableOpacity>

                {/* Divider */}
                <View style={styles.dividerRow}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>Or login with</Text>
                  <View style={styles.dividerLine} />
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                  <Text style={[styles.footerText, isTablet && styles.footerTextTablet]}>
                    Don’t have an account?
                  </Text>
                  <Text style={[styles.footerLink, isTablet && styles.footerLinkTablet]}> Contact HR.</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <LoginSuccessModal visible={showSuccessModal} />
      <Toast
        visible={toast.visible}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        onDismiss={() => setToast(prev => ({ ...prev, visible: false }))}
      />
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
    justifyContent: 'center',
    paddingVertical: moderateScale(10), // Reduced from 20
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  columnContainer: {
    flexDirection: "column",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerSection: {
    alignItems: "center",
    marginBottom: moderateScale(20), // Reduced from 30
    paddingHorizontal: scale(5),
    width: "100%",
  },
  headerSectionLandscape: {
    width: "45%",
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextContainer: {
    alignItems: "center",
    marginTop: moderateScale(5), // Reduced from 10
  },
  logo: {
    // Width/Height are dynamic
  },
  welcome: {
    fontSize: moderateScale(14),
    fontFamily: "rubikMedium",
    marginTop: moderateScale(-10), // Negative margin to pull it closer to logo
    letterSpacing: 1,
  },
  title: {
    fontSize: moderateScale(28),
    textAlign: "center",
    color: "#1F2937",
    fontFamily: "RubikSemiBold",
    marginTop: moderateScale(5),
  },
  titleTablet: {
    fontSize: moderateScale(36),
  },
  subtitle: {
    fontSize: moderateScale(14),
    color: color.textColourLight,
    textAlign: "center",
    fontFamily: "rubikLight",
    marginTop: moderateScale(5),
    maxWidth: '80%',
  },
  subtitleTablet: {
    fontSize: moderateScale(18),
  },
  formSection: {
    width: "100%",
    alignItems: "center",
  },
  formSectionLandscape: {
    width: "50%",
    alignItems: "center",
  },
  inputBlock: {
    width: "100%",
    marginBottom: moderateScale(20),
    position: "relative",
  },
  label: {
    fontSize: moderateScale(14),
    color: color.textColourLight,
    marginBottom: moderateScale(8),
    fontFamily: "Rubik-Light",
  },
  labelTablet: {
    fontSize: moderateScale(18),
  },
  input: {
    height: moderateScale(48),
    borderWidth: 0.5,
    borderColor: color.textColourLight,
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    paddingRight: moderateScale(48),
    fontSize: moderateScale(14),
    color: color.textColour,
    fontFamily: "rubikRegular",
  },
  inputTablet: {
    height: moderateScale(60),
    borderRadius: moderateScale(12),
    fontSize: moderateScale(18),
  },
  inputIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    position: "absolute",
    right: moderateScale(16),
    top: moderateScale(38), // Adjusted for alignment
  },
  inputIconTablet: {
    width: moderateScale(28),
    height: moderateScale(28),
    top: moderateScale(48),
  },
  forgotWrapper: {
    width: "100%",
    marginBottom: moderateScale(24),
  },
  forgotText: {
    textAlign: "right",
    color: color.primary,
    fontFamily: "Rubik-Medium",
    fontSize: moderateScale(14),
  },
  forgotTextTablet: {
    fontSize: moderateScale(18),
  },
  loginBtn: {
    width: "100%",
    height: moderateScale(48),
    backgroundColor: color.primary,
    borderRadius: moderateScale(8),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: moderateScale(24),
    shadowColor: color.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  loginBtnTablet: {
    height: moderateScale(60),
    borderRadius: moderateScale(12),
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: moderateScale(16),
    fontFamily: "Rubik-SemiBold",
  },
  loginTextTablet: {
    fontSize: moderateScale(20),
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(12),
    marginBottom: moderateScale(16),
  },
  dividerLine: {
    height: 0.5,
    flex: 1, // Dynamic width
    maxWidth: moderateScale(100),
    backgroundColor: color.textColourLight,
  },
  dividerText: {
    fontSize: moderateScale(14),
    fontFamily: "rubikLight",
    color: color.textColour,
  },
  footer: {
    flexDirection: "row",
    alignItems: 'center',
  },
  footerText: {
    color: color.textColourLight,
    fontFamily: "rubikMedium",
    fontSize: moderateScale(14),
  },
  footerTextTablet: {
    fontSize: moderateScale(16),
  },
  footerLink: {
    color: color.primary,
    fontFamily: "rubikMedium",
    fontSize: moderateScale(14),
  },
  footerLinkTablet: {
    fontSize: moderateScale(16),
  },
  errorText: {
    color: color.primaryRed,
    fontSize: moderateScale(12),
    marginTop: moderateScale(4),
    fontFamily: "rubikRegular",
    fontStyle: "italic",
  }
});
