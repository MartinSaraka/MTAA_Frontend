import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import CupertinoButtonBlackTextColor2 from "../components/CupertinoButtonBlackTextColor2";
import Training_Get from "../components/TrainingsGet";


const TrainingsPage = ({navigation}) => {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../assets/images/image_JMVe..png")}
                    resizeMode="contain"
                    style={styles.image}
                    imageStyle={styles.image_imageStyle}
                >
                    <View style={styles.image1Row}>
                        <Image
                            source={require("../assets/images/image_uZOV..png")}
                            resizeMode="contain"
                            style={styles.image1}
                        ></Image>
                        <View style={styles.dateTimeColumn}>
                            <Text style={styles.dateTime}>{getTrainingsFromAPI()}Date/time</Text>
                            <CupertinoButtonBlackTextColor2
                                style={styles.cupertinoButtonBlackTextColor2}
                            ></CupertinoButtonBlackTextColor2>
                            <Training_Get></Training_Get>
                        </View>
                    </View>
                    <View style={styles.image2Row}>
                        <Image
                            source={require("../assets/images/image_uZOV..png")}
                            resizeMode="contain"
                            style={styles.image2}
                        ></Image>
                        <View style={styles.dateTime2Column}>
                            <Text style={styles.dateTime2}>time/date</Text>
                            <CupertinoButtonBlackTextColor2
                                style={styles.cupertinoButtonBlackTextColor3}
                            ></CupertinoButtonBlackTextColor2>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 885,
        width: 628,
        alignSelf: "center"
    },
    image_imageStyle: {},
    image1: {
        height: 153,
        width: 133
    },
    dateTime: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 25
    },
    cupertinoButtonBlackTextColor2: {
        height: 44,
        width: 100,
        marginTop: 14,
        marginLeft: 2
    },
    dateTimeColumn: {
        width: 111,
        marginLeft: 10,
        marginTop: 34,
        marginBottom: 32
    },
    image1Row: {
        height: 153,
        flexDirection: "row",
        marginTop: 155,
        marginLeft: 147,
        marginRight: 227
    },
    image2: {
        height: 153,
        width: 133
    },
    dateTime2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 24
    },
    cupertinoButtonBlackTextColor3: {
        height: 44,
        width: 100,
        marginTop: 9,
        marginLeft: 4
    },
    dateTime2Column: {
        width: 107,
        marginLeft: 12,
        marginTop: 24,
        marginBottom: 47
    },
    image2Row: {
        height: 153,
        flexDirection: "row",
        marginTop: 22,
        marginLeft: 147,
        marginRight: 229
    }
});

export default TrainingsPage;
