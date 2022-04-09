import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonBlackTextColor2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>Prihlásiť sa{"\n"}na tréning</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  caption: {
    color: "#000",
    fontSize: 17,
    textAlign: "center"
  }
});

export default CupertinoButtonBlackTextColor2;
