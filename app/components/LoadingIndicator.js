import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

function LoadingIndicator(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={`#ff4545`}
        size="large"
        style={styles.indicator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  indicator: {
    width: 200,
  },
});

export default LoadingIndicator;
