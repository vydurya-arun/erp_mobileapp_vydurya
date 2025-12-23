import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { color } from "@/constants/colors";
import { cardItemsTypes } from "@/app/(root)/(tabs)/task";

type TaskCards = {
    card: cardItemsTypes[];
};

const TaskCardsType2 = ({ card }: TaskCards) => {
    return (
        <View style={styles.dashCards}>
            {card.map((item: any, index: any) => (
                <View key={index} style={styles.subDashCard}>
                    <View style={styles.card}>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                backgroundColor: item.circleColor,
                                borderRadius: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <MaterialCommunityIcons name={item.icon} size={26} color={item.colour} />
                        </View>
                        <Text style={{ fontSize: 28, fontFamily: "rubikMedium",color:item.colour }}>{item.count}</Text>
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: "rubikMedium",color:color.textColourLight }}>{item.name}</Text>

                </View>
            ))}
        </View>
    );
};

export default TaskCardsType2;

const styles = StyleSheet.create({
    dashCards: {
        maxWidth: scale(360),
        width: "100%",
        marginVertical: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap:10
    },
    subDashCard: {
        maxWidth: scale(150),
        width: "100%",
        borderRadius: 12,
        height: verticalScale(100),
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor:'white',
        padding: 15,
    },
    card: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
