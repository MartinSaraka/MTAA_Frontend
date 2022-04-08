import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonBlackTextColor1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.odstranit}>Odstrániť</Text>
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
  odstranit: {
    color: "#000",
    fontSize: 17
  }
});

export default CupertinoButtonBlackTextColor1;
