import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonPurple(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text  style={styles.button}>Prihlásiť sa</Text>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5856D6",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  button: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonPurple;
