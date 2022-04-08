
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import LandingPage from './src/screens/LandingPage';
import LoginPage from './src/screens/LoginPage';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"LandingPage"}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        
        

        <Stack.Screen name="LoginPage" component={LoginPage} />

      </Stack.Navigator>
      
        
        
        



      
      
      
    </NavigationContainer>
  )
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
