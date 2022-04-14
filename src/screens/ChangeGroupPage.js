import React, { Component,useState } from "react";
import {StyleSheet, View, Image, ImageBackground, TextInput, Text, TouchableOpacity, Button} from "react-native";
import DocumentPicker from 'react-native-document-picker';
import * as ImagePicker from "expo-image-picker";

const ChangeGroupPage = ({navigation, route}) => {
    //let userToken = route.params['userToken']
    let userToken = 'i5aQSJUTBmb5ktDpDw7RQyMQar5EqzUq'
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    /*
    const [singleFile, setSingleFile] = useState(null);
    //kód na súbory prevzatý z https://aboutreact.com/file-uploading-in-react-native/
    const uploadImage = async () => {
        // Check if any file is selected or not
        if (singleFile != null) {
            // If file selected then create FormData
            const fileToUpload = singleFile;
            const data = new FormData();
            data.append('name', 'Image Upload');
            data.append('file_attachment', fileToUpload);
            // Please change file upload URL
            let res = await fetch(
                'http://localhost/upload.php',
                {
                    method: 'post',
                    body: data,
                    headers: {
                        'Content-Type': 'multipart/form-data; ',
                    },
                }
            );
            let responseJson = await res.json();
            if (responseJson.status == 1) {
                alert('Upload Successful');
            }
        } else {
            // If no file selected the show alert
            alert('Please Select File first');
        }
    };

    const selectFile = async () => {
        // Opening Document Picker to select one file
        try {
            const res = await DocumentPicker.pickSingle({
                // Provide which type of file you want user to pick
                type: [DocumentPicker.types.allFiles],
                presentationStyle: 'fullScreen',
                // There can me more options as well
                // DocumentPicker.types.allFiles
                // DocumentPicker.types.images
                // DocumentPicker.types.plainText
                // DocumentPicker.types.audio
                // DocumentPicker.types.pdf
            });

            // Printing the log realted to the file
            console.log(res)
            console.log('res : ' + JSON.stringify(res));
            // Setting the state to show single file attributes
            setSingleFile(res);
        } catch (err) {
            setSingleFile(null);
            // Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                // If user canceled the document selection
                alert('Canceled');
            } else {
                // For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };*/
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        global.image = result
        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/images/image_rjQC..png")}
                resizeMode="contain"
                style={styles.image1}
                imageStyle={styles.image1_imageStyle}
            >

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
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                <TouchableOpacity
                    style={styles.materialButtonViolet}

                    onPress={() => {fetch(`http://127.0.0.1:8000/admin/${userToken}/grouptrainings`, {
                        method: 'PUT',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            image: image,
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

                        })}}>
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
    buttonStyle: {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 15,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
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


export default ChangeGroupPage;
