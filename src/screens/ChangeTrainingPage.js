import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialButtonDark from "../components/MaterialButtonDark";

const ChangeTrainingPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/images/image_YUxW..png")}
                resizeMode="contain"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
            >
                <Text style={styles.loremIpsum}></Text>
                <Text style={styles.nazovTreningu}>Názov tréningu</Text>
                <MaterialUnderlineTextbox
                    style={styles.materialUnderlineTextbox}
                ></MaterialUnderlineTextbox>
                <Text style={styles.casTreningu}>Čas tréningu</Text>
                <MaterialUnderlineTextbox1
                    style={styles.materialUnderlineTextbox1}
                ></MaterialUnderlineTextbox1>
                <Text style={styles.datumTreningu}>Dátum tréningu</Text>
                <MaterialUnderlineTextbox1
                    style={styles.materialUnderlineTextbox2}
                ></MaterialUnderlineTextbox1>
                <MaterialButtonDark
                    style={styles.materialButtonDark}
                ></MaterialButtonDark>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 865,
        width: 843,
        marginLeft: -231
    },
    image_imageStyle: {},
    loremIpsum: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 164,
        marginLeft: 276
    },
    nazovTreningu: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 26,
        marginTop: 26,
        marginLeft: 241
    },
    materialUnderlineTextbox: {
        height: 43,
        width: 360,
        backgroundColor: "rgba(155,155,155,1)",
        marginTop: 13,
        marginLeft: 241
    },
    casTreningu: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 26,
        marginTop: 13,
        marginLeft: 241
    },
    materialUnderlineTextbox1: {
        height: 43,
        width: 360,
        backgroundColor: "rgba(155,155,155,1)",
        marginLeft: 239
    },
    datumTreningu: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 26,
        marginTop: 11,
        marginLeft: 241
    },
    materialUnderlineTextbox2: {
        height: 43,
        width: 360,
        backgroundColor: "rgba(155,155,155,1)",
        marginLeft: 239
    },
    materialButtonDark: {
        height: 50,
        width: 127,
        backgroundColor: "rgba(65,117,5,1)",
        marginTop: 24,
        marginLeft: 465
    }
});

export default ChangeTrainingPage;
