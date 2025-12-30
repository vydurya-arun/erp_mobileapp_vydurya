import BadgeV2 from '@/components/BadgeV2'
import RecentCards from '@/components/RecentCards'
import { color } from '@/constants/colors'
import { useGetAttendanceController } from '@/controller/employeeController'
import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'

type FilterType = 'All' | 'On Time' | 'Late';

const dailyactivity = () => {
    const [filter, setFilter] = useState<FilterType>('All');
    const { data: attendance, isLoading } = useGetAttendanceController();

    const filters: { label: FilterType, color: string, bg: string }[] = [
        { label: 'All', color: color.buttonColor, bg: '#E0F2FE' },
        { label: 'On Time', color: color.primaryGreen, bg: color.primaryGreenLight },
        { label: 'Late', color: color.primaryRed, bg: color.primaryRedLight },
    ];

    return (
        <>
            <Stack.Screen options={{ title: 'Daily Activity', headerTitleStyle: { fontFamily: 'rubikMedium' } }} />
            <ScrollView style={styles.container}>
                <View style={styles.filterContainer}>
                    {filters.map((item) => (
                        <TouchableOpacity key={item.label} onPress={() => setFilter(item.label)}>
                            <View style={{ opacity: filter === item.label ? 1 : 0.5 }}>
                                <BadgeV2
                                    title={item.label}
                                    textColor={filter === item.label ? item.color : color.textColourLight}
                                    outColor={filter === item.label ? item.bg : '#F3F4F6'}
                                    widths={scale(80)}
                                />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.cardsContainer}>
                    <RecentCards 
                      filter={filter} 
                      data={attendance?.sessions || []}
                      isLoading={isLoading }
                    />
                </View>
            </ScrollView>
        </>
    )
}

export default dailyactivity

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    filterContainer: {
        flexDirection: 'row',
        padding: moderateScale(16),
        gap: moderateScale(10),
    },
    cardsContainer: {
        paddingHorizontal: moderateScale(16),
    }
})