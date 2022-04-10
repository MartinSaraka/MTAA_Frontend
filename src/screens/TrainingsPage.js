import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native';
import CupertinoButtonBlackTextColor2 from "../components/CupertinoButtonBlackTextColor2";
import Training_Get from "../components/TrainingsGet";


const TrainingsPage = (route) => {
    console.log(route['route'].params)
    let userToken = route['route'].params['userToken']['userToken']
    let userId = route['route'].params['userToken']['userId']

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
                                <Text style={styles.titleTraining}>{item.title}</Text>
                                <Text style={styles.dateTime}>{item.signed_up ? "Prihlásený" : "Neprihlásený"}</Text>
                                <Text style={styles.dateTime}>{item.date} {item.time}</Text>
                                <TouchableOpacity style={[styles.container_button, styles.cupertinoButtonBlackTextColor2]}
                                                  onPress={() => {fetch(`http://127.0.0.1:8000/${userToken}/trainings/signup`, {
                                                          method: 'POST',
                                                          headers: {
                                                              Accept: 'application/json',
                                                              'Content-Type': 'application/json'
                                                          },
                                                          body: JSON.stringify({
                                                              user: userId,
                                                              training: item.id
                                                          })
                                                  });alert("Prihlásený!")}}>

                                    <Text style={styles.caption}>Prihlásiť sa{"\n"}na tréning</Text>
                                </TouchableOpacity>
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
        height: 203,
        flexDirection: "row",
        marginTop: 100,
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
            borderRadius: 5
        },
        caption: {
            color: "#000",
            fontSize: 17,
            textAlign: "center"
        }
});

export default TrainingsPage;
