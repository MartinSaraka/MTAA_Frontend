import React, {Component, useEffect, useState} from "react";
import {render} from 'react-dom';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    Button,
    ActivityIndicator, FlatList
} from "react-native";
import CupertinoButtonBlackTextColor from "../components/CupertinoButtonBlackTextColor";
import CupertinoButtonBlackTextColor1 from "../components/CupertinoButtonBlackTextColor1";
import MaterialButtonHamburger from "../components/MaterialButtonHamburger";

const AdminTrainingPage = ({navigation, route}) => {
    let userToken  = route.params['userToken']['userToken'];
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getTrainings = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/${userToken}/trainings`);
            const json = await response.json();
            setData(json.training);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getTrainings();
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/images/image_JMVe..png")}
                resizeMode="contain"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
            >
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={styles.image1Row}>
                                <Image
                                    source={require("../assets/images/image_uZOV..png")}
                                    resizeMode="contain"
                                    style={styles.image1}
                                ></Image>

                                <View style={styles.dateTimeColumn}>
                                    <View>
                                    <Text style={styles.titleTraining}>{item.title}</Text>
                                    <Text style={styles.dateTime}>{item.date} {item.time}</Text>
                                    <TouchableOpacity style={[styles.container_button, styles.cupertinoButtonBlackTextColor2]}
                                                      onPress={() =>  navigation.navigate('ChangeTrainingPage', {
                                                          userToken:userToken,
                                                          trainingId:item.id
                                                      })}
                                                      activeOpacity={0.5}>

                                        <Text style={styles.caption}>Upraviť{"\n"}tréning</Text>
                                    </TouchableOpacity>
                                    </View>
                                    <View>
                                    <TouchableOpacity style={[styles.container_button, styles.cupertinoButtonBlackTextColor2]}
                                                      onPress={() => {fetch(`http://127.0.0.1:8000/admin/${userToken}/trainings/${item.id}`, {
                                                          method: 'DELETE',
                                                          headers: {
                                                              Accept: 'application/json',
                                                              'Content-Type': 'application/json'
                                                          }
                                                      });alert("Odstránené!")}}
                                                      activeOpacity={0.5}>


                                        <Text style={styles.caption}>Odstrániť{"\n"}tréning</Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                    />)}
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black"
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
    titleTraining: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 25,
        fontWeight: "bold",
        alignItems:"center",
        marginLeft:15,
        marginBottom: 10
    },
    dateTime: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 15,
        alignItems:"center",
        margin:10
    },
    cupertinoButtonBlackTextColor2: {
        height: 44,
        width: 100,
        marginLeft: 2
    },
    dateTimeColumn: {
        width: 111,
        marginLeft: 10,
        marginTop: 34,
        marginBottom: 32
    },
    image1Row: {
        height: 250,
        flexDirection: "row",
        marginTop: 105,
        marginLeft: 147,
        marginRight: 227,
        borderColor:"black"
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
        marginLeft: 4,

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
    },
    container_button: {
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 5,
        margin: 5
    },
    caption: {
        color: "#000",
        fontSize: 17,
        textAlign: "center"
    }
});

export default AdminTrainingPage;
