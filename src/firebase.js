import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCpMVERGQ9vc_YjTen_5P4dEq8h7WDS85E",
    authDomain: "better-feedback-b409e.firebaseapp.com",
    databaseURL: "https://better-feedback-b409e.firebaseio.com",
    projectId: "better-feedback-b409e",
    storageBucket: "better-feedback-b409e.appspot.com",
    messagingSenderId: "911978695691",
    appId: "1:911978695691:web:3bd7a8e23111df296f4b0e"
};
firebase.initializeApp(firebaseConfig);

export default firebase;