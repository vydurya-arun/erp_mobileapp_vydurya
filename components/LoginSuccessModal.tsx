import { color } from "@/constants/colors";
import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface LoginSuccessModalProps {
    visible: boolean;
}

const LoginSuccessModal: React.FC<LoginSuccessModalProps> = ({ visible }) => {
    return (
        <Modal transparent animationType="fade" visible={visible}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    {/* Success Icon */}
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="check-circle" size={48} color={color.primaryGreen} />
                    </View>

                    {/* Title */}
                    <Text style={styles.title}>Login Successful!</Text>

                    {/* Subtitle */}
                    <Text style={styles.subtitle}>
                        Welcome back to WorkForce ERP. Redirecting you to your personal
                        dashboard...
                    </Text>
                </View>
            </View>
        </Modal>
    );
};

export default LoginSuccessModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    container: {
        backgroundColor: "white",
        width: "100%",
        maxWidth: 340,
        borderRadius: 24,
        paddingVertical: 32,
        paddingHorizontal: 24,
        alignItems: "center",
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: color.primaryGreenLight,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: "RubikSemiBold",
        color: "#1F2937",
        marginBottom: 12,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 14,
        fontFamily: "rubikRegular",
        color: color.textColourLight,
        textAlign: "center",
        lineHeight: 20,
    },
});
