

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import ContactPage from "./ContactPage";
import CoachPage from "./CoachPage";
import PricingPage from "./PricingPage";
import AdminTrainingPage from "./AdminTrainingPage";
import TrainingsPage from "./TrainingsPage";
import ChangeTrainingPage from "./ChangeTrainingPage";
import AddTrainingPage from "./AddTrainingPage";
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import NavigationDrawerHeader from '../components/NavigationDrawerHeader';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CoachPageStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="CoachPage">
      <Stack.Screen
        name="CoachPage"
        component={CoachPage}
        options={{
          title: 'O nás', 
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
};

const ContactPageStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ContactPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="ContactPage"
        component={ContactPage}
        options={{
          title: 'Kontakt', 
        }}
      />
    </Stack.Navigator>
  );
};
const PricingPageStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="PricingPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="PricingPage"
        component={PricingPage}
        options={{
          title: 'Cenník', 
        }}
      />
    </Stack.Navigator>
  );
};
const AdminTrainingPageStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="AdminTrainingPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="AdminTrainingPage"
        component={AdminTrainingPage}
        options={{
          title: 'Tréningy-admin', 
        }}
      />
    </Stack.Navigator>
  );
};
const TrainingsPageStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="TrainingsPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="TrainingsPage"
        component={TrainingsPage}
        options={{
          title: 'Tréningy', 
        }}
      />
    </Stack.Navigator>
  );
};
const ChangeTrainingPageStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ChangeTrainingPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="ChangeTrainingPage"
        component={ChangeTrainingPage}
        options={{
          title: 'Tréningy-zmena', 
        }}
      />
    </Stack.Navigator>
  );
};
const AddTrainingPageStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="AddTrainingPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="AddTrainingPage"
        component={AddTrainingPage}
        options={{
          title: 'Tréningy-pridanie', 
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigationPage = (props) => {
  return (
    <Drawer.Navigator
    screenOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
        headerShown: false
      }}
      
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="ContactPageStack"
        options={{drawerLabel: 'Kontakt'}}
        component={ContactPageStack}
      />
      <Drawer.Screen
        name="PricingPageStack"
        options={{drawerLabel: 'Cenník'}}
        component={PricingPageStack}
      />
      <Drawer.Screen
        name="AdminTrainingPageStack"
        options={{drawerLabel: 'Treningy-admin'}}
        component={AdminTrainingPageStack}
      />
      <Drawer.Screen
        name="CoachPageStack"
        options={{drawerLabel: 'Trenéri'}}
        component={CoachPageStack}
      />
      <Drawer.Screen
        name="TrainingsPageStack"
        options={{drawerLabel: 'Tréningy'}}
        component={TrainingsPageStack}
      />
      <Drawer.Screen
        name="ChangeTrainingPageStack"
        options={{drawerLabel: 'Zmena tréningov'}}
        component={ChangeTrainingPageStack}
      />
      <Drawer.Screen
        name="AddTrainingPageStack"
        options={{drawerLabel: 'Pridanie tréningu'}}
        component={AddTrainingPageStack}
      />
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigationPage;