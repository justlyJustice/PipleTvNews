import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

function LoadingIndicator(props) {
  return (
    <ActivityIndicator
      color={`#ff4545`}
      size="large"
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default LoadingIndicator;
