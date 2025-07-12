// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyCE3veqwiTfCf5T4FEmNWPF2XrVxy0hFa8",
  authDomain: "kawseribnjamal-99d0f.firebaseapp.com",
  projectId: "kawseribnjamal-99d0f",
  storageBucket: "kawseribnjamal-99d0f.appspot.com",
  messagingSenderId: "255855799684",
  appId: "1:255855799684:web:5185b6049351e4a881c1d1",
  measurementId: "G-X8E7HD9CK"
};

firebase.initializeApp(firebaseConfig);

window.auth = firebase.auth();
window.db = firebase.firestore();
