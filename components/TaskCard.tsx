import { TaskCardTypes } from '@/app/(protected)/(tabs)/task'
import { color } from '@/constants/colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import BadgeAccept from './BadgeAccept'
import BadgeComplete from './BadgeComplete'
import BadgePending from './BadgePending'
import BadgeProgress from './BadgeProgress'

type taskCardProps = {
    detailCard: TaskCardTypes;
};


const renderBadge = (status: string) => {
  switch (status) {
    case 'pending':
      return <BadgePending />;
    case 'completed':
      return <BadgeComplete />;
    case 'progress':
      return <BadgeProgress />;
    case 'accept':
      return <BadgeAccept />;
    default:
      return null;
  }
};

const TaskCard = ({detailCard}:taskCardProps) => {
    return (
        <View style={styles.main}>
            <View>
                <View style={styles.items1}>
                    <Text style={{ color: color.textColourLight, fontSize: 12 }}>#{detailCard.taskId}</Text>
                    {renderBadge(detailCard.badge)}
                </View>
                
                <Text style={{ fontFamily: 'rubikMedium', fontSize: 22,lineHeight:26 }}>{detailCard.taskTitle}</Text>
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
                    {detailCard.details}
                </Text>
                </View>

            </View>

            <View style={styles.items2}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                    <MaterialIcons name={detailCard.statusMessageIcon} size={18} color={ detailCard.colourStatus} />
                    <Text style={{ color: detailCard.colourStatus ,fontSize:12}}>{detailCard.statusMessage}</Text>
                </View>
                <Text style={{fontFamily:'rubikMedium',fontSize:13,color:color.textColour}}>{detailCard.project}</Text>
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