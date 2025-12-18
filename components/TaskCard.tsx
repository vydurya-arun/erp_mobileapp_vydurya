import { View, Text } from 'react-native'
import React from 'react'
import Badge from './Badge'
import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import { verticalScale } from 'react-native-size-matters'
import { color } from '@/constants/colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BadgeV2 from './BadgeV2'


const TaskCard = () => {
    return (
        <View style={styles.main}>
            <View>
                <View style={styles.items1}>
                    <Text style={{ color: color.textColourLight, fontSize: 12 }}>#AT123</Text>
                    <BadgeV2 title='Complete' outColor={color.primaryGreenLight} textColor={color.primaryGreen}/>
                </View>
                
                <Text style={{ fontFamily: 'rubikMedium', fontSize: 22,lineHeight:26 }}>Review Q3 Reports</Text>
                <View style={{ height: verticalScale(29),width:'92%', overflow: 'hidden' }}>
                <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{
                    fontFamily: 'rubikRegular',
                    fontSize: 14,
                    color:color.textColourLight
                    }}
                >
                    Review the new dashboard wireframes and provide feedback on the user flow for the mobile breakdown.
                </Text>
                </View>

            </View>

            <View style={styles.items2}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                    <MaterialIcons name="check-circle-outline" size={18} color={color.primaryGreen} />
                    <Text style={{ color: color.primaryGreen ,fontSize:12}}>Done yesterday</Text>
                </View>
                <Text style={{fontFamily:'rubikMedium',fontSize:13,color:color.primaryOrange}}>ERP Software</Text>
            </View>

        </View>
    )
}

export default TaskCard

const styles = StyleSheet.create({
    main: {
        maxWidth: scale(360),
        width: '100%',
        backgroundColor: 'white',
        height: verticalScale(125),
        borderRadius: 12,
        padding: 12,
        display: 'flex',
        justifyContent: 'space-between'
    },
    items1: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    items2:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center' 
    }


})