// Import React
import React from "react";

// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Screens
import ContactPage from "./ContactPage";
import CoachPage from "./CoachPage";
import PricingPage from "./PricingPage";
import AdminTrainingPage from "./AdminTrainingPage";
import TrainingsPage from "./TrainingsPage";
import ChangeTrainingPage from "./ChangeTrainingPage";
import AddTrainingPage from "./AddTrainingPage";
import CustomSidebarMenu from "../components/CustomSidebarMenu";
import NavigationDrawerHeader from "../components/NavigationDrawerHeader";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CoachPageStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="CoachPage">
      <Stack.Screen
        name="CoachPage"
        initialParams={{ itemId: userId, userToken: userToken }}
        component={CoachPage}
        options={{
          title: "O nás",
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#307ecc",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const ContactPageStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ContactPage"
      initialParams={{ itemId: userId, userToken: userToken }}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        initialParams={{ itemId: userId, userToken: userToken }}
        name="ContactPage"
        component={ContactPage}
        options={{
          title: "Kontakt",
        }}
      />
    </Stack.Navigator>
  );
};
const PricingPageStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="PricingPage"
      initialParams={{ itemId: userId, userToken: userToken }}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        initialParams={{ itemId: userId, userToken: userToken }}
        name="PricingPage"
        component={PricingPage}
        options={{
          title: "Cenník",
        }}
      />
    </Stack.Navigator>
  );
};
const AdminTrainingPageStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialParams={{ itemId: userId, userToken: userToken }}
      initialRouteName="AdminTrainingPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        initialParams={{ itemId: userId, userToken: userToken }}
        name="AdminTrainingPage"
        component={AdminTrainingPage}
        options={{
          title: "Tréningy-admin",
        }}
      />
    </Stack.Navigator>
  );
};
const TrainingsPageStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialParams={{ itemId: userId, userToken: userToken }}
      initialRouteName="TrainingsPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        initialParams={{ itemId: userId, userToken: userToken }}
        name="TrainingsPage"
        component={TrainingsPage}
        options={{
          title: "Tréningy",
        }}
      />
    </Stack.Navigator>
  );
};
const ChangeTrainingPageStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ChangeTrainingPage"
      initialParams={{ itemId: userId, userToken: userToken }}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="ChangeTrainingPage"
        initialParams={{ itemId: userId, userToken: userToken }}
        component={ChangeTrainingPage}
        options={{
          title: "Tréningy-zmena",
        }}
      />
    </Stack.Navigator>
  );
};
const AddTrainingPageStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="AddTrainingPage"
      initialParams={{ itemId: userId, userToken: userToken }}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="AddTrainingPage"
        initialParams={{ itemId: userId, userToken: userToken }}
        component={AddTrainingPage}
        options={{
          title: "Tréningy-pridanie",
        }}
      />
    </Stack.Navigator>
  );
};
let userId = 0;
let userToken = "";
const DrawerNavigationPage = ({ route, navigation }) => {
  userId = route.params;
  userToken = route.params;
  console.log(route);
  console.log(route);
  console.log(route);
  console.log(route);
  console.log(route);
  console.log(route);
  console.log(userId);
  console.log(userToken);
  let isAdmin = false;
  if (userToken["userToken"] === "i5aQSJUTBmb5ktDpDw7RQyMQar5EqzUq") {
    isAdmin = true;
  } else {
    console.log("dnes nie");
  }
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: "#cee1f2",
        color: "#cee1f2",
        itemStyle: { marginVertical: 5, color: "white" },
        labelStyle: {
          color: "#d8d8d8",
        },
        headerShown: false,
      }}
      drawerContent={CustomSidebarMenu}
    >
      {isAdmin == true ? (
        <>
          <Drawer.Screen
            name="CoachPageStack"
            options={{ drawerLabel: "Trenéri" }}
            component={CoachPageStack}
          />
          <Drawer.Screen
            name="ContactPageStack"
            options={{ drawerLabel: "Kontakt" }}
            component={ContactPageStack}
          />
          <Drawer.Screen
            name="PricingPageStack"
            options={{ drawerLabel: "Cenník" }}
            component={PricingPageStack}
          />
          <Drawer.Screen
            name="AdminTrainingPageStack"
            options={{ drawerLabel: "Treningy-admin" }}
            component={AdminTrainingPageStack}
          />

          <Drawer.Screen
            name="ChangeTrainingPageStack"
            options={{ drawerLabel: "Zmena tréningov" }}
            component={ChangeTrainingPageStack}
          />
          <Drawer.Screen
            name="AddTrainingPageStack"
            options={{ drawerLabel: "Pridanie tréningu" }}
            component={AddTrainingPageStack}
          />
        </>
      ) : (
        <>
          <Drawer.Screen
            name="CoachPageStack"
            options={{ drawerLabel: "Trenéri" }}
            component={CoachPageStack}
          />
          <Drawer.Screen
            name="ContactPageStack"
            options={{ drawerLabel: "Kontakt" }}
            component={ContactPageStack}
          />
          <Drawer.Screen
            name="PricingPageStack"
            options={{ drawerLabel: "Cenník" }}
            component={PricingPageStack}
          />

          <Drawer.Screen
            name="TrainingsPageStack"
            options={{ drawerLabel: "Tréningy" }}
            component={TrainingsPageStack}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigationPage;
