import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

console.log("app")
const app = firebase.app();
export const db = app.firestore();
