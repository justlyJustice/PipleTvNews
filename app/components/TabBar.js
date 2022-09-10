import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function TabBar({ handleBackPress, handleForwardPress, handleQuitApp }) {
  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity onPress={handleQuitApp}>
        <MaterialIcons name="close" style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBackPress}>
        <MaterialIcons name="arrow-back" style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForwardPress}>
        <MaterialIcons name="arrow-forward" style={styles.icon} />
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
    paddingHorizontal: 43,
    justifyContent: "space-between",
  },
  icon: {
    color: "#3f3f3f",
    fontSize: 23,
    fontWeight: "800",
  },
});

export default TabBar;
