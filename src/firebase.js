import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAYngktVjXInn9R9ViOBtN-tAd4mSIJG7c",
    authDomain: "todoist-729d4.firebaseapp.com",
    databaseURL: "https://todoist-729d4-default-rtdb.firebaseio.com",
    projectId: "todoist-729d4",
    storageBucket: "todoist-729d4.appspot.com",
    messagingSenderId: "180960591517",
    appId: "1:180960591517:web:38b23d664924ebff221e74"
});

export {firebaseConfig as firebase};