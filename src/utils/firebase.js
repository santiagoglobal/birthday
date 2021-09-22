//import { app } from "firebase";
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAig_Ti2RucNyXQETeWeg6JSOAn1rUBOzI",
    authDomain: "birthday-386ba.firebaseapp.com",
    databaseURL: "https://birthday-386ba-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "birthday-386ba",
    storageBucket: "birthday-386ba.appspot.com",
    messagingSenderId: "878731871377",
    appId: "1:878731871377:web:93f6e68a4f6fe361812b30"
  };

export default firebase.initializeApp(firebaseConfig);