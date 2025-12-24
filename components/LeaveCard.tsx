import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import BadgeV2 from './BadgeV2'
import { color } from '@/constants/colors'


const LeaveCard = ({ cardData }: any) => {
    return (
        <>
            {cardData.map((item: any, index: number) => (
                <View key={index} style={styles.leaveCard}>
                    <View style={{ backgroundColor: item.mainColor, width: '2%', borderTopLeftRadius: 12, borderBottomLeftRadius: 12, }}></View>
                    <View style={{ backgroundColor: 'white', width: '98%', borderTopRightRadius: 12, borderBottomRightRadius: 12, padding: 12, display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{}} >
                                <Text style={{ fontFamily: 'rubikMedium', fontSize: 24, lineHeight: 27 }}>{item.mainTitle}</Text>
                                <Text style={{ fontFamily: 'rubikRegular', fontSize: 14, lineHeight: 15 }}>Applied On Dec 12, 2025</Text>
                            </View>

                            <BadgeV2 widths={70} title={item.status} textColor={item.mainColor} outColor={item.outColor} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 39 }}>
                            <View style={{ width: 120, }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                    <MaterialCommunityIcons name='calendar' size={17} color={color.textColourLight} />
                                    <Text style={{ color: color.textColourLight }}>Date</Text>
                                </View>
                                <Text style={{ fontFamily: 'rubikRegular', fontSize: 14, paddingLeft: 2 }}>Dec 20 - Dec 22</Text>
                            </View>
                            <View style={{ width: 100, }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                    <MaterialCommunityIcons name='clock' size={17} color={color.textColourLight} />
                                    <Text style={{ color: color.textColourLight }}>Duration</Text>
                                </View>
                                <Text style={{ fontFamily: 'rubikRegular', fontSize: 14, paddingLeft: 5 }}>3 Days</Text>
                            </View>

                        </View>
                    </View>
                </View>
            ))}

        </>

    )
}

export default LeaveCard

const styles = StyleSheet.create({
    leaveCard: {
        backgroundColor: 'white',
        height: verticalScale(110),
        marginHorizontal: scale(10),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: moderateScale(12),
        marginBottom: 10
    }
})