import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

const PricingPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/images/image_ZJTc..png")}
                resizeMode="contain"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
            >
                <Text style={styles.cennik}>Cenník</Text>
                <Text style={styles.skupinovyTrening}>Skupinový tréning</Text>
                <Text style={styles.loremIpsum2}>5e/hod</Text>
                <Text style={styles.individualnyTrening}>Individuálny tréning</Text>
                <Text style={styles.loremIpsum1}>
                    2e/vstup{"\n"}8e/týždeň{"\n"}20e/mesiac
                </Text>
                <Text style={styles.individualneTrener}>Individuálne tréner</Text>
                <Text style={styles.loremIpsum}>20e/hod</Text>
                <Text style={styles.bazen}>Bazén</Text>
                <Text style={styles.loremIpsum3}>3e/hod</Text>
                <Text style={styles.sauna}>Sauna</Text>
                <Text style={styles.loremIpsum4}>5e/vstup</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 830,
        width: 540,
        marginLeft: -83
    },
    image_imageStyle: {},
    cennik: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 51,
        marginTop: 136,
        marginLeft: 94
    },
    skupinovyTrening: {
        fontFamily: "roboto-condensed-regular",
        color: "#121212",
        fontSize: 22,
        marginTop: 10,
        marginLeft: 95
    },
    loremIpsum2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 95
    },
    individualnyTrening: {
        fontFamily: "roboto-condensed-regular",
        color: "#121212",
        fontSize: 22,
        marginTop: 30,
        marginLeft: 94
    },
    loremIpsum1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 95
    },
    individualneTrener: {
        fontFamily: "roboto-condensed-regular",
        color: "#121212",
        fontSize: 22,
        marginTop: 32,
        marginLeft: 94
    },
    loremIpsum: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 6,
        marginLeft: 95
    },
    bazen: {
        fontFamily: "roboto-condensed-regular",
        color: "#121212",
        fontSize: 22,
        marginTop: 36,
        marginLeft: 94
    },
    loremIpsum3: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 94
    },
    sauna: {
        fontFamily: "roboto-condensed-regular",
        color: "#121212",
        fontSize: 22,
        marginTop: 53,
        marginLeft: 94
    },
    loremIpsum4: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 94
    }
});

export default PricingPage;
