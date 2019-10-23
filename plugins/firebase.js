import { firestorePlugin } from "vuefire";
import Vue from "vue";
import firebase from "firebase/app";
import "firebase/firestore";
Vue.use(firestorePlugin);

const config = {
    apiKey: "AIzaSyC_EHJMLB0zVpxbe4iVy1FeSxyWHVygnaM",
    authDomain: "ecommerce-store-dc82d.firebaseapp.com",
    databaseURL: "https://ecommerce-store-dc82d.firebaseio.com",
    projectId: "ecommerce-store-dc82d",
    storageBucket: "ecommerce-store-dc82d.appspot.com",
    messagingSenderId: "719932222242",
    appId: "1:719932222242:web:802ff5c2bcb10ed976537b",
    measurementId: "G-SQ9V0RCQ0R"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
    // firebase
    //   .firestore()
    //   .settings();
  } else {
    firebase.app();
  }
  export const db = firebase.firestore();