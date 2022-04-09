import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialButtonViolet from "../components/MaterialButtonViolet";

const AddTrainingPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/images/image_YUxW..png")}
                resizeMode="contain"
                style={styles.image1}
                imageStyle={styles.image1_imageStyle}
            >
                <Text style={styles.nazovTreningu1}>Názov tréningu</Text>
                <MaterialUnderlineTextbox
                    style={styles.materialUnderlineTextbox1}
                ></MaterialUnderlineTextbox>
                <Text style={styles.casTreningu1}>Čas tréningu</Text>
                <MaterialUnderlineTextbox1
                    style={styles.materialUnderlineTextbox2}
                ></MaterialUnderlineTextbox1>
                <Text style={styles.datumTreningu1}>Dátum tréningu</Text>
                <MaterialUnderlineTextbox1
                    style={styles.materialUnderlineTextbox3}
                ></MaterialUnderlineTextbox1>
                <MaterialButtonViolet
                    style={styles.materialButtonViolet}
                ></MaterialButtonViolet>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image1: {
        height: 865,
        width: 843,
        marginLeft: -234
    },
    image1_imageStyle: {},
    nazovTreningu1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 26,
        marginTop: 190,
        marginLeft: 244
    },
    materialUnderlineTextbox1: {
        height: 43,
        width: 360,
        backgroundColor: "rgba(155,155,155,1)",
        marginTop: 13,
        marginLeft: 244
    },
    casTreningu1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 26,
        marginTop: 13,
        marginLeft: 244
    },
    materialUnderlineTextbox2: {
        height: 43,
        width: 360,
        backgroundColor: "rgba(155,155,155,1)",
        marginLeft: 242
    },
    datumTreningu1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 26,
        marginTop: 11,
        marginLeft: 244
    },
    materialUnderlineTextbox3: {
        height: 43,
        width: 360,
        backgroundColor: "rgba(155,155,155,1)",
        marginLeft: 242
    },
    materialButtonViolet: {
        height: 51,
        width: 124,
        backgroundColor: "rgba(65,117,5,1)",
        marginTop: 25,
        marginLeft: 477
    }
});

export default AddTrainingPage;
