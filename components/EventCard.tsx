import { color } from '@/constants/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type EventType = 'Holiday' | 'Meeting' | 'Work';

export interface EventItem {
    id: string;
    title: string;
    date: string; // YYYY-MM-DD
    type: EventType;
    description: string;
}

const EventCard = ({ event }: { event: EventItem }) => {
    const getIcon = (type: EventType) => {
        switch (type) {
            case 'Holiday': return 'beach-access';
            case 'Meeting': return 'groups';
            case 'Work': return 'work';
            default: return 'event';
        }
    }

    const getColor = (type: EventType) => {
        switch (type) {
            case 'Holiday': return color.primaryRed;
            case 'Meeting': return color.primaryOrange;
            case 'Work': return color.primaryGreen;
            default: return color.primary;
        }
    }

    const getBgColor = (type: EventType) => {
        switch (type) {
            case 'Holiday': return color.primaryRedLight;
            case 'Meeting': return color.primaryOrangeLight;
            case 'Work': return color.primaryGreenLight;
            default: return '#E0F2FE'; // light blue
        }
    }

    return (
        <View style={styles.card}>
            <View style={[styles.iconContainer, { backgroundColor: getBgColor(event.type) }]}>
                <MaterialIcons name={getIcon(event.type)} size={24} color={getColor(event.type)} />
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{event.title}</Text>
                <Text style={styles.cardDesc}>{event.description}</Text>
                <Text style={styles.cardDate}>{event.date}</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: getBgColor(event.type) }]}>
                <Text style={[styles.badgeText, { color: getColor(event.type) }]}>{event.type}</Text>
            </View>
        </View>
    )
}

export default EventCard

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 12,
        marginBottom: 12,
        alignItems: 'center',
        elevation: 1,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontFamily: 'rubikMedium',
        fontSize: 16,
        color: '#1F2937',
    },
    cardDesc: {
        fontFamily: 'rubikRegular',
        fontSize: 12,
        color: color.textColourLight,
        marginBottom: 4,
    },
    cardDate: {
        fontFamily: 'rubikMedium',
        fontSize: 12,
        color: color.primary,
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    badgeText: {
        fontSize: 10,
        fontFamily: 'rubikMedium',
    }
})
