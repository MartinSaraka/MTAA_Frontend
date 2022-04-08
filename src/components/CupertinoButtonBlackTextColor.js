import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import RegisterText from "../components/RegisterText";
import {StackActions as navigation} from "react-navigation";

function CupertinoButtonBlackTextColor(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}
                      activeOpacity={0.5}
                      onPress={() =>  navigation.replace('ContactPage')}>

      <Text style={styles.upravit}>Upraviť</Text>
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
  upravit: {
    color: "#000",
    fontSize: 17
  }
});

export default CupertinoButtonBlackTextColor;
