import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '@/constants/colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Header = ({title}:{title:string}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.mainHeading}>{title}</Text>
            <MaterialIcons
                name="notifications"
                size={26}
                color={color.textColour}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mainHeading: {
        fontFamily: "rubikMedium",
        fontSize: 18
    },
})