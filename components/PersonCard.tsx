import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { scale } from 'react-native-size-matters';
import { color } from '@/constants/colors';
import { PersonalDataItem } from '@/app/(root)/(tabs)/profile';

type PersonCardProps = {
    profile: PersonalDataItem[];
};

const PersonCard = ({ profile }: PersonCardProps) => {
    return (
        <View style={styles.main}>
            {profile.map((item: any, index: any) => (
                <View key={index} style={styles.container}>
                    <View style={styles.subMain}>
                        <MaterialIcons name={item.icon} size={28} color={color.primary} />
                        <Text style={{ fontFamily: "rubikMedium" }}>{item.title}</Text>
                    </View>
                    <Text style={{ fontFamily: "rubikRegular", color: "#6C7278" }}>{item.label}</Text>

                </View>

            ))}

        </View>
    )
}

export default PersonCard

const styles = StyleSheet.create({
    main: {
        maxWidth: scale(360),
        width: '100%',
        backgroundColor: "white",
        padding: 12,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        marginVertical:10
    },
    subMain: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        paddingVertical: 12,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})