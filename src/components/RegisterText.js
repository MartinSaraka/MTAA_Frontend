import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function RegisterText(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.button}>Nemáš ešte účet ?</Text>
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
    fontFamily: "roboto-regular",
    color: "#fff",
    height: 29,
    width: 160,
    marginTop: 12,
    marginLeft: 302,
    
  },
  button: {
    color: "#fff",
    fontSize: 11
  }
  
});

export default RegisterText;
