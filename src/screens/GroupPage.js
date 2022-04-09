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
    TouchableOpacity
} from 'react-native';
import CupertinoButtonBlackTextColor2 from "../components/CupertinoButtonBlackTextColor2";
import Training_Get from "../components/TrainingsGet";



const GroupPage = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getGroupTrainings = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/CHbUs3NTcHrH08PNHZsa1BsKFSkQgvZx/trainings/grouptrainings');
            const json = await response.json();
            setData(json);
            console.log(data)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getGroupTrainings();
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/images/image_rjQC..png")}
                resizeMode="contain"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
            ><Text style={styles.dateTime2}>Pripojte sa na{"\n"}náš skupinový online{"\n"}tréning pomocou úžasnej{"\n"}WebRTC technológie!</Text>
                {isLoading ? <ActivityIndicator/> : (


                            <View style={styles.image1Row}>
                                <Image style={{width: 150, height: 150}} source={{uri: data.image}}/>

                                <View style={styles.dateTimeColumn}>
                                    <Text style={styles.titleTraining}>{data.date}</Text>
                                    <Text style={styles.titleTraining}>{data.time}</Text>
                                </View>
                            </View>
                    )}
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
        marginBotton: 10,
        width: 3000
    },
    titleH: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 25,
        alignItems:"center",
        width: 30
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
        height: 153,
        flexDirection: "row",
        marginTop: 155,
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
        fontSize: 24,
        marginLeft: 200,
        alignContent:"center",
        marginTop: 100
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

export default GroupPage;
