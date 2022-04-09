import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

const CoachPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/images/image_jgmn..png")}
                resizeMode="contain"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
            >
                <Text style={styles.nasTim}>Náš tím</Text>
                <Image
                    source={require("../assets/images/image_odqL..png")}
                    resizeMode="contain"
                    style={styles.image2}
                ></Image>
                <Text style={styles.trenerDioklecian}>Tréner Dioklecián</Text>
                <Image
                    source={require("../assets/images/image_ogJI..png")}
                    resizeMode="contain"
                    style={styles.image3}
                ></Image>
                <Text style={styles.trenerkaUrsula}>Trénerka Uršula</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    image: {
        height: 812,
        width: 488,
        alignSelf: "center"
    },
    image_imageStyle: {},
    nasTim: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 27,
        marginTop: 156,
        marginLeft: 185
    },
    image2: {
        height: 200,
        width: 200,
        marginTop: 11,
        marginLeft: 132
    },
    trenerDioklecian: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 17,
        marginTop: 7,
        marginLeft: 166
    },
    image3: {
        height: 200,
        width: 200,
        marginTop: 12,
        marginLeft: 132
    },
    trenerkaUrsula: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 11,
        marginLeft: 214
    }
});

export default CoachPage;
