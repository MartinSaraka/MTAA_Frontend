
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import LandingPage from './src/screens/LandingPage';
import LoginPage from './src/screens/LoginPage';
import ContactPage from './src/screens/ContactPage';
import CoachPage from './src/screens/CoachPage';
import PricingPage from './src/screens/PricingPage';
import AdminTrainingPage from './src/screens/AdminTrainingPage';
import TrainingsPage from './src/screens/TrainingsPage';
import ChangeTrainingPage from './src/screens/ChangeTrainingPage';
import AddTrainingPage from './src/screens/AddTrainingPage';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"AdminTrainingPage"}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />


        <Stack.Screen name="LoginPage" component={LoginPage} />

          <Stack.Screen name="CoachPage" component={CoachPage} />
          <Stack.Screen name="PricingPage" component={PricingPage} />
          <Stack.Screen name="AdminTrainingPage" component={AdminTrainingPage} />
          <Stack.Screen name="TrainingsPage" component={TrainingsPage} />
          <Stack.Screen name="ContactPage" component={ContactPage} />
          <Stack.Screen name="ChangeTrainingPage" component={ChangeTrainingPage} />
        <Stack.Screen name="AddTrainingPage" component={AddTrainingPage} />
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
