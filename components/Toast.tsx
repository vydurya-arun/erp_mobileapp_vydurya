import { color } from "@/constants/colors";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
    visible: boolean;
    type?: ToastType;
    title: string;
    message: string;
    onDismiss: () => void;
    duration?: number;
}

const Toast: React.FC<ToastProps> = ({
    visible,
    type = 'success',
    title,
    message,
    onDismiss,
    duration = 3000,
}) => {

    useEffect(() => {
        if (visible && duration > 0) {
            const timer = setTimeout(() => {
                onDismiss();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [visible, duration, onDismiss]);

    if (!visible) return null;

    const getColors = () => {
        switch (type) {
            case 'success':
                return { border: '#3B82F6', iconBg: '#EFF6FF', icon: '#3B82F6', iconName: 'check-bold' as const };
            case 'error':
                return { border: color.primaryRed, iconBg: color.primaryRedLight, icon: color.primaryRed, iconName: 'alert-circle' as const };
            case 'warning':
                return { border: color.primaryOrange, iconBg: color.primaryOrangeLight, icon: color.primaryOrange, iconName: 'alert' as const };
            case 'info':
            default:
                return { border: color.primary, iconBg: color.primarylight, icon: color.primary, iconName: 'information' as const };
        }
    };

    const stylesColors = getColors();

    return (
        <Animated.View
            entering={FadeInUp.springify()}
            exiting={FadeOutUp}
            style={[styles.container, { borderLeftColor: stylesColors.border }]}
        >
            <View style={[styles.iconContainer, { backgroundColor: stylesColors.iconBg }]}>
                <MaterialCommunityIcons name={stylesColors.iconName} size={20} color={stylesColors.icon} />
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
            </View>

            <TouchableOpacity onPress={onDismiss} style={styles.dismissBtn}>
                <Text style={styles.dismissText}>Dismiss</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default Toast;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: moderateScale(50),
        left: moderateScale(20),
        right: moderateScale(20),
        backgroundColor: 'white',
        borderRadius: 8,
        borderLeftWidth: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(16),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        zIndex: 1000,
    },
    iconContainer: {
        width: moderateScale(32),
        height: moderateScale(32),
        borderRadius: moderateScale(16),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: moderateScale(12),
    },
    contentContainer: {
        flex: 1,
    },
    title: {
        fontSize: moderateScale(14),
        fontFamily: 'Rubik-SemiBold',
        color: '#1F2937',
        marginBottom: 2,
    },
    message: {
        fontSize: moderateScale(12),
        fontFamily: 'rubikRegular',
        color: '#6B7280',
    },
    dismissBtn: {
        marginLeft: moderateScale(8),
        padding: 4,
    },
    dismissText: {
        fontSize: moderateScale(12),
        fontFamily: 'rubikMedium',
        color: '#6B7280',
    }
});
