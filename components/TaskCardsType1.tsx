import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { color } from '@/constants/colors';

const TaskCardsType1 = () => {
    return (
        <View style={styles.dashCards}>
            <View style={styles.subDashCard}>
                <View>
                    <View style={{ width: 50, height: 50, backgroundColor: '#D3F0FF', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MaterialCommunityIcons name="timer-sand-complete" size={26} color={color.primary} />
                    </View>
                    <Text>5</Text>
                </View>
            </View>
            <View style={styles.subDashCard}><Text>2</Text></View>
        </View>
    )
}

export default TaskCardsType1

const styles = StyleSheet.create({
    dashCards: {
        maxWidth: scale(360),
        width: '100%',
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subDashCard: {
        maxWidth: scale(150),
        width: '100%',
        borderRadius: 12,
        height: verticalScale(110),
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
    }
})