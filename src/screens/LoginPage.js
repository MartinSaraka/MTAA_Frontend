import React, {state,useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';





const LoginPage = ({navigation,route}) => {
  console.log(route)
  console.log(route)
  console.log(route)
  console.log(route)
  console.log(route)
  console.log(route)
  console.log(route)
  
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userName) {
      alert('Zadajte Meno');
      return;
    }
    if (!userPassword) {
      alert('Zadajte Heslo');
      return;
    }
    setLoading(true);
    let dataToSend = {name:userName, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: userName ,
        password:userPassword })
  };
  fetch('http://127.0.0.1:8000/users/login', requestOptions)
  .then(async response => {
      const isJson = response.headers.get('content-type')?.includes('application/json');
      const data = isJson && await response.json();

      // check for error response
      if (!response.ok) {
        console.error('bbbbbbbbbbbbbbbbbbbbbbbbbbbb');
        console.log('Skontrulujte si svoje meno a heslo');
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
      }
      else{
        console.log(data.user_token)
        console.log(data.id)
        console.log(data.status)
        
        navigation.navigate('DrawerNavigationPage', {
          userId: data.id,
          userToken:data.user_token
          
        });
        console.error('aaaaaaaaaaaaaaaaa');
      }
     console.log(data.user_token)
     console.log(data.id)
     console.log(data.status)
     
  })
    .catch(error => {
      console.log('Skontrulujte si svoje meno a heslo1');
      alert('Skontrulujte si svoje meno a heslo1');
      console.error('halo je tu error!');
  });
     
  };

  return (
    <View style={styles.mainBody}>
      <ImageBackground

          source={require("../assets/images/loginPhoto.png")}
          resizeMode="cover"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>

            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserName) =>
                  setUserName(UserName)
                }
                placeholder="Zadajte Meno" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Zadajte Heslo" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
              >
              <Text style={styles.buttonTextStyle}>Prihlásiť sa</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterPage')}>
              Nemáš ešte účet ?
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default LoginPage;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,

  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  image2: {
    flex: 1,
    justifyContent: "center"
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
