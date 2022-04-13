import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import 'react-native-gesture-handler';
import GroupPage from './src/screens/GroupPage';
import LandingPage from "./src/screens/LandingPage";
import LoginPage from "./src/screens/LoginPage";
import RegisterPage from "./src/screens/RegisterPage";
import ContactPage from "./src/screens/ContactPage";
import CoachPage from "./src/screens/CoachPage";
import PricingPage from "./src/screens/PricingPage";
import AdminTrainingPage from "./src/screens/AdminTrainingPage";
import TrainingsPage from "./src/screens/TrainingsPage";
import ChangeTrainingPage from "./src/screens/ChangeTrainingPage";
import AddTrainingPage from "./src/screens/AddTrainingPage";
import DrawerNavigationPage from "./src/screens/DrawerNavigationPage";
import ChangeGroupPage from "./src/screens/ChangeGroupPage";
const Stack = createStackNavigator();

const App = () => {
  const itemId  = 89
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={"LandingPage"}
        >
            <Stack.Screen name="ChangeGroupPage" component={ChangeGroupPage} />
            <Stack.Screen name="LandingPage" component={LandingPage} />

            <Stack.Screen name="LoginPage" component={LoginPage}   />
            <Stack.Screen name="RegisterPage" component={RegisterPage} />
            <Stack.Screen
                name="DrawerNavigationPage"
                component={DrawerNavigationPage}

            />
            <Stack.Screen name="ContactPage" component={ContactPage} />
            <Stack.Screen name="CoachPage" component={CoachPage} />
            <Stack.Screen name="PricingPage" component={PricingPage} />
            <Stack.Screen name="AdminTrainingPage" component={AdminTrainingPage} />
            <Stack.Screen name="TrainingsPage" component={TrainingsPage} />
            
            <Stack.Screen
                name="ChangeTrainingPage"
                component={ChangeTrainingPage}
            />
            <Stack.Screen name="AddTrainingPage" component={AddTrainingPage} />
        <Stack.Screen name="GroupPage" component={GroupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
