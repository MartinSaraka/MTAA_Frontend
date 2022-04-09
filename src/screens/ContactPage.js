import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Button,TouchableOpacity, } from "react-native";

const ContactPage = ({ props,route }) => {
    console.log(route)
    console.log(route)
    console.log(route)

  return (
    <View style={styles.container}>
      <View style={styles.adresaStackStack}>
        <View style={styles.adresaStack}>
          <Text style={styles.adresa}>Adresa</Text>
          
          <Image
            source={require("../assets/images/image_P1WD..png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </View>
        <Image
          source={require("../assets/images/image_MTNt..png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.otvaracieHodiny}>Otváracie hodiny</Text>
        <Image
          source={require("../assets/images/image_p5vm..png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Image
          source={require("../assets/images/image_KMqe..png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <Text style={styles.loremIpsum}>
          Posilková 1,{"\n"}Bratislava - Karlova Ves
        </Text>
        <Text style={styles.loremIpsum2}>
          Po-Pi: 6.00-20.00{"\n"}So-Ne: 8.00-20.00
        </Text>
        <Text style={styles.kontaktnaOsoba}>Kontaktná osoba</Text>
        <Text style={styles.martinSaraka}>
          Martin Saraka{"\n"}0912 345 678{"\n"}martin.saraka@azet.sk
        </Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  adresa: {
    top: 186,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    lineHeight: 18,
    fontSize: 24,
  },
  image4: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 826,
    width: 375,
  },
  adresaStack: {
    top: 0,
    left: 0,
    width: 375,
    height: 826,
    position: "absolute",
  },
  image: {
    position: "absolute",
    top: 172,
    left: 192,
    height: 74,
    width: 77,
  },
  otvaracieHodiny: {
    top: 350,
    left: 20,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 21,
  },
  image2: {
    position: "absolute",
    top: 350,
    left: 197,
    height: 74,
    width: 68,
  },
  image3: {
    position: "absolute",
    top: 516,
    left: 192,
    height: 90,
    width: 77,
  },
  loremIpsum: {
    top: 214,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
  },
  buttonStyle: {
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
  },
  loremIpsum2: {
    top: 387,
    left: 20,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
  },
  kontaktnaOsoba: {
    top: 529,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 21,
  },
  martinSaraka: {
    top: 561,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
  },
  adresaStackStack: {
    width: 375,
    height: 826,
    marginTop: -14,
  },
});

export default ContactPage;
