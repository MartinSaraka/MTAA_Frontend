import React, { Component, useState } from "react";
import {StyleSheet, View, Image, ImageBackground, Text, TextInput, TouchableOpacity} from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialButtonDark from "../components/MaterialButtonDark";
import AdminTrainingPage from "./AdminTrainingPage";

const ChangeTrainingPage = ({navigation, route}) => {
    console.log(route)
    let userToken = route.params['userToken']
    let trainingId = route.params['trainingId']
    let userId = route.params['userToken']
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [
        isTrainingSuccess,
        setIsTrainingSuccess
    ] = useState(false);
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/images/image_YUxW..png")}
                resizeMode="contain"
                style={styles.image1}
                imageStyle={styles.image1_imageStyle}
            >
                <Text style={styles.nazovTreningu1}>Názov tréningu</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(title) => setTitle(title)}
                        underlineColorAndroid="#f000"
                        placeholder="Zadaj názov"
                        placeholderTextColor="#8b9cb5"
                        returnKeyType="next"
                        blurOnSubmit={false}
                    />
                </View>
                <Text style={styles.casTreningu1}>Čas tréningu</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(time) => setTime(time)}
                        underlineColorAndroid="#f000"
                        placeholder="Zadaj čas"
                        placeholderTextColor="#8b9cb5"
                        returnKeyType="next"
                        blurOnSubmit={false}
                    />
                </View>
                <Text style={styles.datumTreningu1}>Dátum tréningu</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(date) => setDate(date)}
                        underlineColorAndroid="#f000"
                        placeholder="Zadaj dátum"
                        placeholderTextColor="#8b9cb5"
                        returnKeyType="next"
                        blurOnSubmit={false}
                    />
                </View>
                <TouchableOpacity
                    style={styles.materialButtonViolet}

                    onPress={() => {fetch(`http://192.168.0.101:8000/admin/${userToken}/trainings/change/${trainingId}`, {
                        method: 'PUT',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            title: title,
                            date: date,
                            time: time
                        })
                    }).then(async response => {
                        const data = await response.status;
                        console.log(data)

                        // check for error response
                        if (!response.ok) {
                            console.error('bbbbbbbbbbbbbbbbbbbbbbbbbbbb');
                            console.log('Skontrulujte si svoje meno a heslo')
                            alert('Nesprávny vstup');
                            const error = (data && data.message) || response.status;
                            return Promise.reject(error);
                        }
                        else{

                            alert("Zmenený tréning")
                        }
                    })
                        .catch(error => {
                            console.log(error)
                            console.error('halo je tu error!');

                        });navigation.navigate('DrawerNavigationPage',{
                            userId: userId,
                            userToken:userToken

                    });console.log(AdminTrainingPage)}}>
                    <Text style={styles.zmenitTrening}>Zmeniť tréning</Text>
                </TouchableOpacity>
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
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
        width: 100
    },
    materialButtonViolet: {
        height: 51,
        width: 124,
        backgroundColor: "rgba(65,117,5,1)",
        marginTop: 25,
        marginLeft: 450
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        width:340,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 35,
        margin: 10,
        alignSelf:"center"
    },
    zmenitTrening: {
        color: "#fff",
        fontSize: 14
    }
});

export default ChangeTrainingPage;
