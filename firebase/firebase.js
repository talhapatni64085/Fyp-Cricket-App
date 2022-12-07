// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMBRrIOCn52hS0AUbsGAUDIBG5lOYHkxA",
  authDomain: "cricketapp-9500c.firebaseapp.com",
  projectId: "cricketapp-9500c",
  storageBucket: "cricketapp-9500c.appspot.com",
  messagingSenderId: "666439856551",
  appId: "1:666439856551:web:3efc003a2bbeb78c238682"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

 const auth = firebase.auth()

export {auth};
