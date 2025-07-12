// firebase.js

const firebaseConfig = {
  apiKey: "AIzaSyCE3veqwiTfCf5T4FEmNWPF2XrVxy0hFa8",
  authDomain: "kawseribnjamal-99d0f.firebaseapp.com",
  projectId: "kawseribnjamal-99d0f",
  storageBucket: "kawseribnjamal-99d0f.appspot.com",
  messagingSenderId: "255855799684",
  appId: "1:255855799684:web:5185b604935799684881c1d1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
