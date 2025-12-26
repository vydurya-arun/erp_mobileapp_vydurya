import { color } from "@/constants/colors";
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { scale } from "react-native-size-matters";

const ActionButton = ({ icon, label, onPress, iconColor }:{ icon:any, label:string, onPress:any, iconColor:string }) => {
  const { width } = useWindowDimensions();

  // dynamic size (phones vs tablets)
  const SIZE = width >= 768 ? scale(72) : scale(56);
  const ICON_SIZE = width >= 768 ? 40 : 34;

  return (
    <Pressable style={[styles.mainLinks, { width: SIZE, height: SIZE }]} onPress={onPress}>
      <View >
        {icon(ICON_SIZE, iconColor)}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default ActionButton;


const styles = StyleSheet.create({
  mainLinks: {
    backgroundColor: "white",
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: scale(8),
  },
  label: {
    fontSize: scale(10),
    fontFamily: "rubikMedium",
    textAlign: "center",
    color: color.textColour,
    lineHeight:11
  },
});
