import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function TabBar({ handleBackPress, handleForwardPress, handleQuitApp }) {
  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity onPress={handleQuitApp}>
        <MaterialCommunityIcons name="close" size={20} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBackPress}>
        <MaterialCommunityIcons name="less-than" size={20} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForwardPress}>
        <MaterialCommunityIcons name="greater-than" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: "#d3d3d3",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
});

export default TabBar;
