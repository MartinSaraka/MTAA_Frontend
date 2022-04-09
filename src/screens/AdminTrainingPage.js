import React, { Component } from "react";
import {StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity} from "react-native";
import CupertinoButtonBlackTextColor from "../components/CupertinoButtonBlackTextColor";
import CupertinoButtonBlackTextColor1 from "../components/CupertinoButtonBlackTextColor1";
import MaterialButtonHamburger from "../components/MaterialButtonHamburger";

const AdminTrainingPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageStack}>
                <ImageBackground
                    source={require("../assets/images/image_UWv9..png")}
                    resizeMode="contain"
                    style={styles.image}
                    imageStyle={styles.image_imageStyle}
                >

                    <View style={styles.image2Row}>
                        <Image
                            source={require("../assets/images/image_uZOV..png")}
                            resizeMode="contain"
                            style={styles.image2}
                        ></Image>

                        <View style={styles.dateTimeStack}>
                            <Text style={styles.dateTime}>Date/time</Text>
                            <TouchableOpacity
                                style={[styles.cupertinoButtonBlackTextColor, styles.container1]}
                                activeOpacity={0.5}
                                onPress={() =>  navigation.replace('ChangeTrainingPage')}
                                /*onPress={handleSubmitPress}*/
                            >
                                <Text
                                    style={styles.upravit}>Upraviť</Text>
                            </TouchableOpacity>
                            <CupertinoButtonBlackTextColor1
                                style={styles.cupertinoButtonBlackTextColor1}
                            ></CupertinoButtonBlackTextColor1>
                        </View>
                    </View>
                    <Button
                        style={styles.materialButtonHamburger}
                        activeOpacity={0.5}
                        onPress={() =>  navigation.replace('LandingPage')}>
                        ></Button>
                    <View style={styles.image3Row}>
                        <Image
                            source={require("../assets/images/image_uZOV..png")}
                            resizeMode="contain"
                            style={styles.image3}
                        ></Image>
                        <View style={styles.dateTime2Column}>
                            <View style={styles.cupertinoButtonBlackTextColor2Stack}>
                                <TouchableOpacity
                                    style={[styles.cupertinoButtonBlackTextColor, styles.container1]}
                                    activeOpacity={0.5}
                                    onPress={() =>  navigation.replace('ChangeTrainingPage')}
                                    /*onPress={handleSubmitPress}*/
                                >
                                    <Text
                                        style={styles.upravit}>Upraviť</Text>
                                </TouchableOpacity>
                                <CupertinoButtonBlackTextColor1
                                    style={styles.cupertinoButtonBlackTextColor3}
                                ></CupertinoButtonBlackTextColor1>
                                <Text style={styles.dateTime3}>Date/time</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        position: "absolute",
        top: 0,
        height: 876,
        width: 608,
        left: 0
    },
    image_imageStyle: {},
    image2: {
        height: 153,
        width: 133
    },
    dateTime: {
        top: 0,
        left: 0,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 25
    },
    cupertinoButtonBlackTextColor: {
        height: 44,
        width: 100,
        position: "absolute",
        left: 0,
        top: 21
    },
    materialButtonHamburger: {
        height: 36,
        width: 36,
        backgroundColor: "rgba(0,0,0,1)",
        marginTop: 57,
        marginLeft: 428
    },
    cupertinoButtonBlackTextColor1: {
        height: 44,
        width: 100,
        position: "absolute",
        left: 0,
        top: 52
    },
    dateTimeStack: {
        width: 111,
        height: 96,
        marginLeft: 9,
        marginTop: 48
    },
    image2Row: {
        height: 153,
        flexDirection: "row",
        marginTop: 155,
        marginLeft: 137,
        marginRight: 218
    },
    image3: {
        height: 153,
        width: 133,
        marginTop: 22
    },
    dateTime2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 21,
        marginLeft: 10
    },
    cupertinoButtonBlackTextColor2: {
        height: 44,
        width: 100,
        position: "absolute",
        left: 1,
        top: 19
    },
    cupertinoButtonBlackTextColor3: {
        height: 44,
        width: 100,
        position: "absolute",
        left: 1,
        top: 49
    },
    dateTime3: {
        top: 0,
        left: 0,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 23
    },
    cupertinoButtonBlackTextColor2Stack: {
        width: 102,
        height: 93,
        marginTop: 38
    },
    dateTime2Column: {
        width: 103,
        marginLeft: 8,
        marginBottom: 19
    },
    image3Row: {
        height: 175,
        flexDirection: "row",
        marginLeft: 137,
        marginRight: 227
    },
    image1: {
        position: "absolute",
        top: 308,
        height: 876,
        width: 608,
        left: 491
    },
    imageStack: {
        width: 1099,
        height: 1184,
        marginLeft: -116
    },
    container1: {
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

export default AdminTrainingPage;
