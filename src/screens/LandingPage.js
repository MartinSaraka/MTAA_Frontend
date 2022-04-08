import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Button,  TouchableOpacity, Text } from "react-native";
import CupertinoButtonPurple from "../components/CupertinoButtonPurple";
import RegisterText from "../components/RegisterText";
const LandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/image_Imh0..png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        
        <ImageBackground
          source={require("../assets/images/image_ix80..png")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          
          <TouchableOpacity
              style={styles.container1}
              activeOpacity={0.5}
              onPress={() =>  navigation.replace('LoginPage')} 
              /*onPress={handleSubmitPress}*/
              >
              <Text 
              style={styles.buttonTextStyle}>Prihlásiť sa</Text>
          </TouchableOpacity> 
          <RegisterText ></RegisterText>

         
          
        </ImageBackground>
        
        
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container1: {
    backgroundColor: "#5856D6",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16,
    height: 74,
    width: 187,
    marginTop: 641,
    marginLeft: 288
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  buttonStyle: {
    position: "absolute",
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    top: 100,
    height: 409,
    width: 368,
    left: 193
  },
  image: {
    position: "absolute",
    top: 100,
    height: 409,
    width: 368,
    left: 193
  },
  image2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 812,
    width: 775
  },
  
  image2_imageStyle: {},
  cupertinoButtonPurple: {
    height: 74,
    width: 187,
    marginTop: 641,
    marginLeft: 288
  },
  hm: {
    height: 74,
    width: 187,
    backgroundColor: "#5856D6",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  imageStack: {
    width: 775,
    height: 812,
    marginLeft: -193
  }
});

export default LandingPage;
